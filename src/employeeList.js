import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const ShowEmployeeList = () => {
    let table;
    const navigate = useNavigate();
    const [addEmpDetails, setAddEmpDetails] = useState(localStorage.getItem('items'));
    
    const deleteEmpDetails = (value) => {
        let afterDeletingList = JSON.parse(localStorage.getItem('items'));
        afterDeletingList = afterDeletingList.filter((item, i) => i !== value);
        localStorage.setItem('items', JSON.stringify(afterDeletingList));
        if(afterDeletingList.length === 0) {
            localStorage.clear('items');
            setAddEmpDetails(afterDeletingList);
        }
        else {  
            setAddEmpDetails(JSON.stringify(afterDeletingList));
        }
        
    }
    
    const editEmpDetails = (value) => {
        navigate('/basic-details/add?id=' + value);
    }

    if(addEmpDetails && addEmpDetails.length > 0) {
        table = JSON.parse(addEmpDetails).map((item, i) => (
                    <tr className='employee__container__trow' key={item.id} value={item.id}>
                        <td className='employee__container__trow__tdata'>{item.firstname}</td>
                        <td className='employee__container__trow__tdata'>{item.lastname}</td>
                        <td className='employee__container__trow__tdata'>{item.age}</td>
                        <td className='employee__container__trow__tdata'>
                            <button className='employee__container__trow__tdata__del-button' value={i} onClick={(e) => deleteEmpDetails(i)}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16">
                                    <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path>
                                </svg> */}
                                Delete Employee
                            </button>
                        </td>
                        <td className='employee__container__trow__tdata'>
                            <button className='employee__container__trow__tdata__edit-button' value={item} onClick={(e) => editEmpDetails(item.id)}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 80 80">
                                    <path d="M 63.074219 10.003906 C 61.535156 10.003906 59.996094 10.589844 58.828125 11.757813 L 51.585938 19 L 15.140625 55.441406 L 9.257813 70.738281 L 24.558594 64.859375 L 24.707031 64.707031 L 68.242188 21.171875 C 70.578125 18.835938 70.578125 15.019531 68.242188 12.6875 L 67.3125 11.757813 C 66.148438 10.589844 64.609375 10.003906 63.074219 10.003906 Z M 63.074219 11.992188 C 64.09375 11.992188 65.113281 12.386719 65.902344 13.171875 L 66.828125 14.097656 C 68.398438 15.671875 68.398438 18.1875 66.828125 19.757813 L 66 20.585938 L 59.414063 14 L 60.242188 13.171875 C 61.027344 12.386719 62.050781 11.992188 63.074219 11.992188 Z M 58 15.414063 L 64.585938 22 L 61 25.585938 L 54.414063 19 Z M 53 20.414063 L 59.585938 27 L 24.65625 61.929688 C 24.480469 61.378906 24.207031 60.792969 23.707031 60.292969 C 22.972656 59.558594 22.046875 59.289063 21.320313 59.144531 C 21.089844 59.097656 21.089844 59.121094 20.902344 59.097656 C 20.878906 58.910156 20.902344 58.910156 20.855469 58.679688 C 20.710938 57.953125 20.441406 57.027344 19.707031 56.292969 C 19.207031 55.792969 18.621094 55.519531 18.070313 55.34375 Z M 53 23 C 52.449219 23 52 23.449219 52 24 C 52 24.550781 52.449219 25 53 25 C 53.550781 25 54 24.550781 54 24 C 54 23.449219 53.550781 23 53 23 Z M 50 26 C 49.449219 26 49 26.449219 49 27 C 49 27.550781 49.449219 28 50 28 C 50.550781 28 51 27.550781 51 27 C 51 26.449219 50.550781 26 50 26 Z M 47 29 C 46.449219 29 46 29.449219 46 30 C 46 30.550781 46.449219 31 47 31 C 47.550781 31 48 30.550781 48 30 C 48 29.449219 47.550781 29 47 29 Z M 44 32 C 43.449219 32 43 32.449219 43 33 C 43 33.550781 43.449219 34 44 34 C 44.550781 34 45 33.550781 45 33 C 45 32.449219 44.550781 32 44 32 Z M 41 35 C 40.449219 35 40 35.449219 40 36 C 40 36.550781 40.449219 37 41 37 C 41.550781 37 42 36.550781 42 36 C 42 35.449219 41.550781 35 41 35 Z M 38 38 C 37.449219 38 37 38.449219 37 39 C 37 39.550781 37.449219 40 38 40 C 38.550781 40 39 39.550781 39 39 C 39 38.449219 38.550781 38 38 38 Z M 35 41 C 34.449219 41 34 41.449219 34 42 C 34 42.550781 34.449219 43 35 43 C 35.550781 43 36 42.550781 36 42 C 36 41.449219 35.550781 41 35 41 Z M 32 44 C 31.449219 44 31 44.449219 31 45 C 31 45.550781 31.449219 46 32 46 C 32.550781 46 33 45.550781 33 45 C 33 44.449219 32.550781 44 32 44 Z M 29 47 C 28.449219 47 28 47.449219 28 48 C 28 48.550781 28.449219 49 29 49 C 29.550781 49 30 48.550781 30 48 C 30 47.449219 29.550781 47 29 47 Z M 26 50 C 25.449219 50 25 50.449219 25 51 C 25 51.550781 25.449219 52 26 52 C 26.550781 52 27 51.550781 27 51 C 27 50.449219 26.550781 50 26 50 Z M 23 53 C 22.449219 53 22 53.449219 22 54 C 22 54.550781 22.449219 55 23 55 C 23.550781 55 24 54.550781 24 54 C 24 53.449219 23.550781 53 23 53 Z M 16.660156 57.066406 C 16.753906 57.082031 16.824219 57.085938 16.929688 57.105469 C 17.453125 57.210938 18.027344 57.441406 18.292969 57.707031 C 18.558594 57.972656 18.789063 58.546875 18.894531 59.070313 C 19 59.59375 19 60 19 60 L 19 61 L 20 61 C 20 61 20.40625 61 20.929688 61.105469 C 21.453125 61.210938 22.027344 61.441406 22.292969 61.707031 C 22.558594 61.972656 22.789063 62.546875 22.894531 63.070313 C 22.914063 63.175781 22.917969 63.246094 22.933594 63.339844 L 16.003906 66.003906 L 13.996094 63.996094 Z"></path>
                                </svg> */}
                                Edit Employee
                            </button>
                        </td>
                    </tr>            
                ))
    }
    else {
        table = <tr className='employee__container__trow'>
                    <td className='employee__container__trow__tdata' colSpan="5">
                        <div className='employee__container__trow__tdata__empty-state'>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="smile" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"></path></svg>
                            <p className='employee__container__trow__tdata__empty-state__text'>Data Not Found</p>
                        </div>
                    </td>
                </tr>
    }

    return (
        <div className='employee'>
            <div className='employee__title'>
                <h1 className='employee__title__text'>
                    Employee List
                </h1>
                <button className='employee__title__button' onClick={() => navigate('/basic-details/add/')}>
                    +
                </button>
            </div>
            <div className='employee__container'>
                <table>
                    <tbody>
                        <tr className='employee__container__trow'>
                            <th className='employee__container__trow__thead'>Firstname</th>
                            <th className='employee__container__trow__thead'>Lastname</th>
                            <th className='employee__container__trow__thead'>Age</th>
                            <th className='employee__container__trow__thead'>Delete</th>
                            <th className='employee__container__trow__thead'>Edit</th>
                        </tr>
                        {table}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowEmployeeList;