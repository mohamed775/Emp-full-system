import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')

    const [errors , setErrors] = useState({
      firstName: '',
      lastName:'',
      email:''
    })

    const createEmployee = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/employee', {
            
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                // Include token if using JWT
                // 'Authorization': 'Bearer ' + token
            },
            credentials: 'include', // Include credentials if needed
            body: JSON.stringify({
              firstName,
              lastName,
              email
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
            
    }
    }


    const navigator = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        if(vaildateForm()){
          const employee = {firstName , lastName , email}
          console.log(employee)
          createEmployee();
          navigator('/employees')
        }
        
    }


    function vaildateForm(){
      let valid = true;
      const errorsCopy = {...errors}

      if(firstName.trim()){
        errorsCopy.firstName = '';
      }else{
        errorsCopy.firstName  = 'First name is required ';
        valid = false ;
      }

      if(lastName.trim()){
        errorsCopy.lastName = '';
      }else{
        errorsCopy.lastName  = 'Last name is required ';
        valid = false ;
      }

      if(email.trim()){
        errorsCopy.email = '';
      }else{
        errorsCopy.email  = 'Last name is required ';
        valid = false ;
      }

      setErrors(errorsCopy);

      return valid ;

    }

  return (
    <div>

<form>

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">first name</label>
    <div class="col-sm-10">
      <input
       type="text"
        id="inputEmail3"
        name='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        class='form-control '
        >
      </input>
       <div class="invalid-feedback">{errors.firstName} </div>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">last name</label>
    <div class="col-sm-10">
      <input
       type="text"
       class="form-control"
       id="inputEmail3"
       name='lastName'
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
       >
       </input>
        <div class="invalid-feedback">{errors.lastName} </div>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email"
       class="form-control"
       id="inputEmail3" 
       name='email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       >
       </input>
      <div class="invalid-feedback">{errors.email} </div>

    </div>
  </div>

  <button type="submit" class="btn btn-primary" onClick={saveEmployee}>add</button>

</form>

    </div>
  )
}

export default EmployeeComponent