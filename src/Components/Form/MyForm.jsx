import React, { useState } from "react";
import "./MyForm.css";
const MyFrom = () => {
  const validEmail = RegExp("^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$");
  const validpassword = RegExp(
    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,20}$"
  );

  // const[check, setCheck] = useState(false)

  const inputValidationTest = (inputs) => {
    const input = inputs.inputs
    if (input.fname.length === 0 ||
      input.lname.length === 0 ||
      input.email.length === 0 ||
      input.gender.length === 0 ||
      input.password.length === 0 ||
      input.confirmPass.length === 0 ||
      input.phoneNo.length === 0 ) {
      console.log("Button disabled");
      return 1
    }
    console.log("Validation Passed button is enable");
    return 0
  }

  

  const [inputstate, setInput] = useState({
    inputs: {
      fname: "",
      lname: "",
      email: "",
      gender: '',
      password: "",
      confirmPass: "",
      phoneNo: "",
      checkBox: ''
    },
    errors: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPass: "",
      phoneNo: "",
    },
  });

  const [disable, setDisabled] = useState(1)

  // const checkHandler = event => {
  //   setCheck(event.target.checked)
  //   inputValidationTest(inputstate)
  // }

  const evenHandler = (event) => {
    event.persist();
    // console.log('aaaaaaaaa', event);
    const { name, value } = event.target;
    // console.log("Name :", name, "value :", value);
    // console.log(event);
    let errorMag = inputstate.errors;
    switch (name) {
      case "fname":
        if (value.length === 0) errorMag.fname = "* required filed";
        else if (value.length < 3) errorMag.fname = "minimum lenght 3";
        else errorMag.fname = "";
        break;
      case "lname":
        if (value.length === 0) errorMag.lname = "* required filed";
        else if (value.length < 3) errorMag.lname = "minimum lenght 3";
        else errorMag.lname = "";
        break;
      case "email":
        if (value.length === 0) errorMag.email = "* required filed";
        else if (!validEmail.test(value)) errorMag.email = "Wrong Pattern";
        else errorMag.email = "";
        break;
      case "password":
        if (value.length === 0) errorMag.password = "required filed";
        // errorMag.password = value.length === 0 ? "required filed" : "";
        else if (!validpassword.test(value))
          errorMag.password = "Wrong Patternt";
        else errorMag.password = "";
        break;
      case "confirmPass":
        if (value.length === 0) errorMag.confirmPass = "required filed";
        // errorMag.password = value.length === 0 ? "required filed" : "";
        else if (value !== inputstate.inputs.password)
          errorMag.confirmPass = "Password Doesn't Match";
        else { errorMag.confirmPass = "" };
        break;
      case "phoneNo":
        errorMag.phoneNo = value.length === 0 ? "required filed" : "";
        break;
      default:
      // console.log("Error");
    }
    setInput({ inputs: { ...inputstate.inputs, [name]: value }, errors: errorMag });
    console.log(inputstate);
    // console.log("Error", inputstate.errors);
    setDisabled(inputValidationTest(inputstate))
  };
  let submithandler = (event) => {
    event.preventDefault();
    // console.log(inputstate);
    if (inputstate.inputs.password !== inputstate.inputs.confirmPass) {
      setInput({ ...inputstate, err: true, errors: { ...inputstate.errors, confirmPass: "Password Doesn't Match" } })
    }
    if (inputstate.inputs.gender.length === 0) {
      setInput({ ...inputstate, errors: { ...inputstate.errors, gender: "Select a gender" } })
    }

    else {
      console.log(inputstate);
      setInput({
        inputs: {
          fname: "",
          lname: "",
          email: "",
          gender: '',
          password: "",
          confirmPass: "",
          phoneNo: "",
          checkBox: ''
        },
        errors: {
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirmPass: "",
          phoneNo: "",
        },
      })
      setDisabled(1)
      document.getElementById("reset").reset();
    }

  };
  return (
    <>
      <div className="form_class">
        <form onSubmit={submithandler} className="my_form" id="reset">
          <h1>React Form</h1>
          <div className="my_input">
            <label htmlFor="fname">Fname</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter your First name"
              onChange={evenHandler}
            />
            {inputstate.errors && inputstate.errors.fname.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.fname}</p>
            ) : null}
          </div>
          <div className="my_input">
            <label htmlFor="lname">Lname</label>
            <input
              type="text"
              name="lname"
              placeholder="Enter your Last name"
              onChange={evenHandler}
            />

            {inputstate.errors && inputstate.errors.lname.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.lname}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="gender" style={{ "fontSize": "16px", "fontWeight": "500" }}>Select your gender</label>
            <br />
            <input
              type="radio"
              name="gender"
              value='Male'
              // placeholder="Enter your Last name"
              onChange={evenHandler}
            />Male
            <input
              type="radio"
              name="gender"
              value='Female'
              // placeholder="Enter your Last name"
              onChange={evenHandler}
            />Female
            {/* {inputstate.errors && inputstate.errors.gender.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.gender}</p>
            ) : null} */}

          </div>
          <div className="my_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={evenHandler}
            />
            {inputstate.errors && inputstate.errors.email.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.email}</p>
            ) : null}
          </div>
          <div className="my_input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              onChange={evenHandler}
            />
            {inputstate.errors && inputstate.errors.password.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.password}</p>
            ) : null}
          </div>
          <div className="my_input">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              name="confirmPass"
              placeholder="Confirm your Password"
              onChange={evenHandler}
            />
            {inputstate.errors && inputstate.errors.confirmPass.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.confirmPass}</p>
            ) : null}
          </div>
          <div className="my_input">
            <label htmlFor="phoneNo">Contact</label>
            <input
              type="text"
              name="phoneNo"
              placeholder="Enter your Contact Number"
              onChange={evenHandler}
            />
            {inputstate.errors && inputstate.errors.phoneNo.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.phoneNo}</p>
            ) : null}
          </div>
          {/* <div className="my_input">
            <label htmlFor="checkBox">Check box</label>
            <input
              type="checkbox"
              name="checkBox"
              onChange={checkHandler}
            />
            {inputstate.errors && inputstate.errors.phoneNo.length > 0 ? (
              <p style={{ color: "red" }}>{inputstate.errors.phoneNo}</p>
            ) : null}
          </div> */}
          <div className="buttom_sub">
              <button type="submit" disabled={disable}>Submit</button> 
            {/* {console.log(check)} */}
          </div>
        </form>
      </div>
    </>
  );
};

export default MyFrom;