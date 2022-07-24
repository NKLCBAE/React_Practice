import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import signupEmail from '../assets/ZoneA.png'
import signupPassword from '../assets/ZoneA.png'
import signupBday from '../assets/ZoneA.png'

import './SignUp.css'

function SignUp() {

  const navigate = useNavigate();

  const zone = useLocation().state.zone;
  const seatNo = useLocation().state.seatNo;

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    bday: "",
    password: ""
  })
  const [data, setData] = useState(JSON.parse(localStorage.getItem("userLogin")));

  useEffect(() => {
    localStorage.setItem("userLogin", JSON.stringify(data))
  }, [data]);

  const getdata = (e) => {

    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
    console.log(inpval);

  }
  const setAndGo = () => {
    console.log(inpval)
    inpval.id = 
    inpval.userId = "ssafy"+Math.floor(Math.random()*99999999+1);
    inpval.cardNo = Math.floor(Math.random()*8999999+1000000).toString();
    inpval.userAge = Math.floor(Math.random()*99+1);
    inpval.userHeight = Math.floor(Math.random()*40+150);
    inpval.seatSet = Math.floor(Math.random()*10+1);
    inpval.monitorSet = Math.floor(Math.random()*10+1);
    setData((current) => [...current, inpval]);
    setTimeout(() => {
      navigate('../login', { state: { zone: `${zone}`, seatNo: `${seatNo}` } });
    }, 300);
  }

  const addData = async (e) => {
    e.preventDefault();

    const { name, email, bday, password } = inpval;

    if (name === "") {
      toast.error('name field is requred', {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error('email field is requred', {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error('email is invalid', {
        position: "top-center",
      });
    } else if (bday === "") {
      toast.error('birthday is requred', {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error('password field is requred', {
        position: "top-center",
      });
    } else if (password.length < 2) {
      toast.error('password should be longer than 8 letters', {
        position: "top-center",
      });
    } else {
      e.target.disabled = 'disabled'
      setAndGo();
    }
  }

  return (
    <div className="signupPage">
      <div className="signupMain">
        <div className='signupSmallMain'>
          <div>
            <h1 className='signupSignUp'>Sign Up</h1>
            <div>
              <div>
                <img src={signupEmail} alt='signupEmail' className='signupInputImage' />
                <input name="name" type='text' onChange={getdata} placeholder='enter your name' className='name' />
              </div>
              <div className='signupInputEmail'>
                <img src={signupEmail} alt='signupEmail' className='signupInputImage' />
                <input name="email" type='text' onChange={getdata} placeholder='enter your email' className='name' />
              </div>
              <div className='signupInputPassword'>
                <img src={signupPassword} alt='signupPassword' className='signupInputImage' />
                <input name="password" type='password' onChange={getdata} placeholder='password' className='name' />
              </div>
              <div className='signupInputBDay'>
                <img src={signupBday} alt='signupPassword' className='signupInputImage' />
                <input name="bday" type='date' onChange={getdata} placeholder='Birthday' className='name' />
              </div>
              <div className="signupButtonPlace">
                <Link to={`../login`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
                  <button className="signupButton" type="submit" onClick={addData}>
                    Sign Up
                  </button>
                </Link>
              </div>

            </div>
            <p className='signupLink'>Already Have an Account? <Link to={`../login`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }} style={{ textDecoration: 'none' }}>LogIn</Link></p>
          </div>
        </div>
        <div className="signupBackPlace">
          <Link to={`/reading`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
            <button className="signupBackButton">Back(테두리색)</button>
          </Link>
        </div>
        <ToastContainer />
      </div>
    </div>

  )
}

export default SignUp


