import React from 'react';
import { useState } from 'react';
import ShowEmployeeList from './employeeList';

const Content = () => {
    // const [empDetails, setEmpDetails] = useState(false);
    const [addEmpDetails, setAddEmpDetails] = useState([]);
    const [countid, setCountid] = useState(0);

    // const handleAddEmpDetails = () => {
    //     setEmpDetails(empDetails => !empDetails);
    // }

    function handleSubmit(event) {
        event.preventDefault();
        let firstName = event.target.elements.firstname.value;
        let lastName = event.target.elements.lastname.value;
        let age = event.target.elements.age.value;
        
        if(event.target[0].dataset.id) {
            addEmpDetails.forEach((item, i) => {
                console.log('l1');
                if(item.id === Number(event.target[0].dataset.id)) {
                    item.firstname = firstName;
                    item.lastname = lastName;
                    item.age = age;  
                }
            });
            setAddEmpDetails([...addEmpDetails]);
        }
        else {
            setCountid(countid + 1);
            let allDetails = {'firstname' : firstName, 'lastname' : lastName, 'age' : age, 'id' : countid};
            const a = [...addEmpDetails, allDetails];
            setAddEmpDetails(a);
        }
        
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#age').value = '';
        document.querySelector('#firstname').setAttribute('data-id', '');
    }

    const deletingEmp = (value) => { 
        let afterDeletingList = addEmpDetails.filter((item, i) => i !== value);
        setAddEmpDetails(afterDeletingList);
    }

    const editEmp = (value) => {
        addEmpDetails.forEach((item, i) => {
            if(i === value) {
                document.querySelector('#firstname').value = item.firstname;
                document.querySelector('#lastname').value = item.lastname;
                document.querySelector('#age').value = item.age; 
                document.querySelector('#firstname').setAttribute('data-id', item.id); 
            }
        });
    }

    return (
        <main className='content'>
            <h1 className='content__header-text'>
                Employee List
            </h1>
            {/* <button className='content__addEmpButton' onClick={() => handleAddEmpDetails()}>
                Add Employee Details
            </button> */}
            {/* { empDetails && ( */}
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
            {/* )} */}
            { addEmpDetails.length > 0 && (
                <ShowEmployeeList addEmpDetails={addEmpDetails} deletingEmp={deletingEmp} editEmp={editEmp} />
            )}
        </main>
    )
}

export default Content