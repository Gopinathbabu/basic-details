import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Content = () => {
    const [addEmpDetails, setAddEmpDetails] = useState({'firstname': '', 'lastname': '', 'age': ''});
    const [disabledButton, setDisabledButton] = useState(true);
    const navigate = useNavigate();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");

    useEffect(() => {
        if(id) {
            let editValues = JSON.parse(localStorage.getItem('items'));
            editValues.forEach((item, i) => {
                if(Number(id) === Number(item.id)) {
                    setAddEmpDetails({'firstname': item.firstname, 'lastname': item.lastname, 'age': item.age}); 
                }
            });
        }
    }, [id]);

    const handleOnchange = (e) => {
        const {name, value} = e.target;
        setAddEmpDetails((prevValue) => {
            return { ...prevValue, [name]: value}
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const collectData = [];
        if(localStorage.getItem("items") === null) {
            collectData.push({...addEmpDetails, 'id': 0});
            localStorage.setItem('items', JSON.stringify(collectData));
        }
        else {
            let getAllItems = [];
            let newCountID = 0;
            getAllItems = JSON.parse(localStorage.getItem('items'));
            
            if(!id && getAllItems.length > 0) {
                getAllItems.forEach((item, i, elm) => {
                    if(elm.length - 1 === i) {
                        newCountID = (Number(item.id) + 1);
                        getAllItems.push({...addEmpDetails, 'id': newCountID});
                        localStorage.setItem('items', JSON.stringify(getAllItems));
                    }
                });
            
            }
            else {
                getAllItems.forEach((item, i, elm) => {
                    if(Number(id) === i) {
                        item.firstname = addEmpDetails.firstname;
                        item.lastname = addEmpDetails.lastname;
                        item.age = addEmpDetails.age;
                        localStorage.setItem('items', JSON.stringify(getAllItems));
                    }
                });
            }
        }

        setAddEmpDetails({'firstname': '', 'lastname': '', 'age': ''});
        navigate('/basic-details/');
    }

    return (
        <main className='content'>
            <h1 className='content__header-text'>
                Add New Employee
            </h1>
            <div className='content__allFields'> 
                <form className='content__allFields__form' id='form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='content__allFields__form__fieldContainer'>
                        <label className='content__allFields__form__fieldContainer__name'>First Name</label>
                        <input className='content__allFields__form__fieldContainer__name__input-first' type='text' value={addEmpDetails.firstname} onChange={handleOnchange} name='firstname' id='firstname' placeholder='First Name' required/>
                    </div>
                    <div className='content__allFields__form__fieldContainer'>
                        <label className='content__allFields__form__fieldContainer__name'>Last Name</label>
                        <input className='content__allFields__form__fieldContainer__name__input-last' type='text' value={addEmpDetails.lastname} onChange={handleOnchange} name='lastname' id='lastname' placeholder='Last Name' required/>
                    </div>
                    <div className='content__allFields__form__fieldContainer'>
                        <label className='content__allFields__form__fieldContainer__name'>Age</label>
                        <input className='content__allFields__form__fieldContainer__name__input-age' type='number' value={addEmpDetails.age} onChange={handleOnchange} name='age' id='age' placeholder='Age' required/>
                    </div>
                    <input className='content__allFields__form__fieldContainer__submit-button' type='submit'/>
                </form>
            </div>
        </main>
    )
}

export default Content