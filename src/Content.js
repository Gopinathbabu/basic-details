import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Content = () => {
    const [addEmpDetails, setAddEmpDetails] = useState([]);
    const navigate = useNavigate();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");

    useEffect(() => {
        if(id) {
            let editValues = JSON.parse(localStorage.getItem('items'));
            editValues.forEach((item, i) => {
                if(Number(id) === Number(item.id)) {
                    document.querySelector('#firstname').value = item.firstname;
                    document.querySelector('#lastname').value = item.lastname;
                    document.querySelector('#age').value = item.age;
                    document.querySelector('#firstname').setAttribute('data-id', item.id); 
                }
            });
        }
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        let firstName = event.target.elements.firstname.value;
        let lastName = event.target.elements.lastname.value;
        let age = event.target.elements.age.value;
        let a;
        if(localStorage.getItem("items") === null) {
            let allDetails = {'firstname' : firstName, 'lastname' : lastName, 'age' : age, 'id' : 0};
            a = [...addEmpDetails, allDetails];
            setAddEmpDetails(a);
            localStorage.setItem('items', JSON.stringify(a));
        }
        else {
            let items = [];
            let newCountID = 0;
            items = JSON.parse(localStorage.getItem('items'));
            if(!id && items.length > 0 ) {
                items.forEach((item, i, elm) => {
                    if(elm.length - 1 === i) {
                        newCountID = (Number(item.id) + 1);
                    }
                });
                let allDetails = {'firstname' : firstName, 'lastname' : lastName, 'age' : age, 'id' : newCountID};
                a = [...addEmpDetails, allDetails];
                setAddEmpDetails(a);
                items.push(allDetails);
                localStorage.setItem('items', JSON.stringify(items));
            }
            else {
                items.forEach((item, i, elm) => {
                    if(Number(id) === Number(item.id)) {
                        item.firstname = firstName;
                        item.lastname = lastName;
                        item.age = age;
                    }
                });
                setAddEmpDetails([...items]);
                localStorage.setItem('items', JSON.stringify(items));
            }
        }
        
        navigate('/basic-details/');
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#age').value = '';
        document.querySelector('#firstname').setAttribute('data-id', '');
    }

    return (
        <main className='content'>
            <h1 className='content__header-text'>
                Add New Employee
            </h1>
            <div className='content__allFields'> 
                <form className='content__allFields__form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='content__allFields__form__fieldContainer'>
                        <label className='content__allFields__form__fieldContainer__name'>First Name</label>
                        <input className='content__allFields__form__fieldContainer__name__input-first' type='text' data-id={''} name='firstname' id='firstname' placeholder='First Name' required/>
                    </div>
                    <div className='content__allFields__form__fieldContainer'>
                        <label className='content__allFields__form__fieldContainer__name'>Last Name</label>
                        <input className='content__allFields__form__fieldContainer__name__input-last' type='text' name='lastname' id='lastname' placeholder='Last Name' required/>
                    </div>
                    <div className='content__allFields__form__fieldContainer'>
                        <label className='content__allFields__form__fieldContainer__name'>Age</label>
                        <input className='content__allFields__form__fieldContainer__name__input-age' type='number' name='age' id='age' placeholder='Age' required/>
                    </div>
                    <input className='content__allFields__form__fieldContainer__submit-button' type='submit'/>
                </form>
            </div>
        </main>
    )
}

export default Content