import React, { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')


    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName , lastName , email}
        console.log(employee)
    }

  return (
    <div>

<form>

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">first name</label>
    <div class="col-sm-10">
      <input
       type="text"
        class="form-control" 
        id="inputEmail3"
        name='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        >
      </input>
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
    </div>
  </div>

  <button type="submit" class="btn btn-primary" onClick={saveEmployee}>add</button>

</form>

    </div>
  )
}

export default EmployeeComponent