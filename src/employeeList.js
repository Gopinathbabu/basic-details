import React from 'react';

const ShowEmployeeList = ({addEmpDetails, deletingEmp, editEmp}) => {
    
    return (
        // { addEmpDetails && (
            <>
                <h2>Employee List</h2>
                <div className='employee-container'>
                    <table>
                        <tbody>
                            <tr className='employee-container__trow'>
                                <th className='employee-container__trow__thead'>First Name</th>
                                <th className='employee-container__trow__thead'>Last Name</th>
                                <th className='employee-container__trow__thead'>Age</th>
                                <th className='employee-container__trow__thead'>Delete</th>
                                <th className='employee-container__trow__thead'>Edit</th>
                            </tr>
                            { addEmpDetails && addEmpDetails.map((item, i) => (
                                <tr className='employee-container__trow' key={item.id} value={item.id}>
                                    <td className='employee-container__trow__tdata'>{item.firstname}</td>
                                    <td className='employee-container__trow__tdata'>{item.lastname}</td>
                                    <td className='employee-container__trow__tdata'>{item.age}</td>
                                    <td className='employee-container__trow__tdata'>
                                        <button className='employee-container__trow__tdata__del-button' value={i} onClick={(value) => deletingEmp(i)}>Delete Employee</button>
                                    </td>
                                    <td className='employee-container__trow__tdata'>
                                        <button className='employee-container__trow__tdata__edit-button' value={item} onClick={(value) => editEmp(i)}>Edit Employee</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        // )}
    )
}

export default ShowEmployeeList;