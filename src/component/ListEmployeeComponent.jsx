import React, {useEffect, useState} from 'react'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/employee', {
                    headers: {
                        'Content-Type': 'application/json',
                        // Include token if using JWT
                        // 'Authorization': 'Bearer ' + token
                    },
                    credentials: 'include' // Include credentials if needed
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                    
            }
        };

        fetchEmployees();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    

    return (
        <div>
            <h1>Employee List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">first name</th>
                        <th scope="col">last name</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td scope="row">{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent