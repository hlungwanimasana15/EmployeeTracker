import React from 'react'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'
import { edit } from 'react-icons-kit/feather/edit'


const EmployeeList = ({ employees, handleEdit, deleteEmployeeinfo  }) => {
    

    return (
        <>
            {employees.map((employee) => (
                
                <tr >
                    <td>{employee.namesurname}</td>
                    <td>{employee.idnumber}</td>
                    <td>{employee.email}</td>
                    <td>{employee.employeeposition}</td>
                    <td>{employee.phonenumber}</td>
                    <td>{employee.image}</td>
                    <td><button className='edit-btn' onClick={()=>handleEdit(employee)}>edit< Icon icon={ edit } /></button></td>
                    <td><button className='delete-btn' onClick={() => deleteEmployeeinfo(employee.index)}>delete< Icon icon={trash} /></button></td>
                </tr>
            ))};
           
        </>
    )
}

export default EmployeeList