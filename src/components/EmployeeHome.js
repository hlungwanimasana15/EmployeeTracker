import React, { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";

// getting values of the local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("employeeinfo");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const EmployeeHome = () => {
  //main Array of objects state|| employee state  array||
  const [employees, setEmployees] = useState(getDatafromLS());

  //input fields states
  const [namesurname, setNameSurname] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [employeeposition, setEmployeePosition] = useState("");
  const [phonenumber, setIdPhoneNumber] = useState("");
  const [image, setImage] = useState("");

  //form submit event
  const handleAddEmployeeinfo = (e) => {
    e.preventDefault();
    //creating an object
    let employee = {
      namesurname,
      idnumber,
      email,
      employeeposition,
      phonenumber,
      image,
    };
    setEmployees([...employees, employee]);
    setNameSurname("");
    setIdNumber("");
    setEmail("");
    setEmployeePosition("");
    setIdPhoneNumber("");
    console.log("Employee added", employee);
  };

  const handleUpdate = () => {
    console.log("update added");
    let updateForm = {
      namesurname,
      idnumber,
      email,
      employeeposition,
      phonenumber,
      image,
    };

    setNameSurname(namesurname);
    setIdNumber(idnumber);
    setEmail(email);
    setEmployeePosition(employeeposition);
    setIdPhoneNumber(phonenumber);

    setEmployees(
      employees.map((employee) => {
        return employee.namesurname === namesurname ? updateForm : employee;
      })
    );

    console.log("update added");
  };

  //the edit buttons
  function handleEdit(employee) {
    console.log("Edit fn", setNameSurname(employee.namesurname));
    setNameSurname(employee.namesurname);
    setIdNumber(employee.idnumber);
    setEmail(employee.email);
    setEmployeePosition(employee.employeeposition);
    setIdPhoneNumber(employee.phonenumber);
  }

  // delete employeeinfo from ls
  const deleteEmployeeinfo = (index) => {
    const updatedEmployees = [...employees];
    // Remove the employee at the specified index
    updatedEmployees.splice(index, 1);
    // Update the state with the new array
    setEmployees(updatedEmployees);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("employeeinfo", JSON.stringify(employees));
  }, [employees]);
  console.log("saved info", employees);

  return (
    <div className="wrapper">
      <h1>Employee Tracker</h1>
      <p>please enter your details</p>
      <div className="main">
        <div className="form-container">
          <form className="form-group" onSubmit={handleAddEmployeeinfo}>
            <label>Name & Surname</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setNameSurname(e.target.value)}
              value={namesurname}
            ></input>
            <br></br>
            <label>ID Number</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setIdNumber(e.target.value)}
              value={idnumber}
            ></input>
            <br></br>
            <label>Email Address</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <br></br>
            <label>Employee Position</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setEmployeePosition(e.target.value)}
              value={employeeposition}
            ></input>
            <br></br>
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setIdPhoneNumber(e.target.value)}
              value={phonenumber}
            ></input>
            <br></br>
            <label>Image</label>
            <input
              type="file"
              onChange={() => setImage([])}
              className="form-control"
            ></input>
            <br></br>
            <button type="submit" className="btn-add">
              Add employee
            </button>
            <br></br>
          </form>
        </div>
        <div className="view-container">
          {employees.length > 0 && (
            <>
              <table style={{ padding: "15px" }}>
                <thead>
                  <tr>
                    <th>Name & Surname</th>
                    <th>ID Number</th>
                    <th>Email Address</th>
                    <th>Employee Position</th>
                    <th>Phone Number</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <EmployeeList
                    handleEdit={handleEdit}
                    employees={employees}
                    deleteEmployeeinfo={deleteEmployeeinfo}
                  />
                </tbody>
              </table>
              <button
                className="btn-update"
                type="button"
                onClick={handleUpdate}
              >
                Update info
              </button>
              <button className="btn-clear" onClick={() => setEmployees([])}>
                Clear All
              </button>
            </>
          )}
          {employees.length < 1 && <div>no employee added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
