import './Login.css'
import loginProfile from '../assets/ZoneA.png'
import loginEmail from '../assets/ZoneB.png'
import loginPassword from '../assets/ZoneC.png'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
  const zone = useLocation().state.zone;
  const seatNo = useLocation().state.seatNo;
  let name = "";
  const navigate = useNavigate()

  const [inpval, setInpval] = useState({
    email: "",
    password: ""
  })
  
  console.log(inpval)

  const getdata = (e) => {

    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addData = (e) => {
      e.preventDefault()

      const getuserArr = localStorage.getItem("userLogin")
      console.log(getuserArr)

      const { email, password } = inpval
      if (email === "") {
          toast.error('email field is requred', {
              position: "top-center",
          })
      } else if (!email.includes("@")) {
          toast.error('이메일 형식을 확인하세요', {
              position: "top-center",
          })
      } else if (password === "") {
          toast.error('비밀번호를 입력해주세요', {
              position: "top-center",
          })
      } else if (password.length < 2) {
        toast.error('비밀번호를 확인해주세요', {
          position: "top-center",
        })
      } else {

        if (getuserArr && getuserArr.length) {
          const userData = JSON.parse(getuserArr)
          const userLogging = userData.filter((el, k) => {
            if(el.email === email && el.password === password){
              name = el.name;
              return el.email === email && el.password === password
            }
          });

          if (userLogging.length === 0) {
            toast.error('아이디 또는 비밀번호가 잘못되었습니다', {
              position: "top-center",
          })
          } else {
            toast.success('로그인 되었습니다', {
              position: "top-center",
          })
            console.log("login success")
            
            navigate('../success', {state: { zone: `${zone}`, seatNo: `${seatNo}`, name: `${name}` }})
            
          }
        }
      }
  }

  return (
    <div className='loginMain'>

      <div>
        <div className='loginProfileImgPlace'>
          <div className='loginProfileImmgContainer'>
            <img src={loginProfile} alt='loginProfile' className='loginProfileImg'/>
          </div>
        </div>

        <div>
          <h1>Login</h1>
          <div>
            <img src={loginEmail} alt='loginEmail' className='loginInputImage'/>
            <input type='text' placeholder='email' className='name' onChange={getdata} name='email'/>
          </div>
          <div className='loginInputPassword'>
            <img src={loginPassword} alt='loginPassword' className='loginInputImage'/>
            <input type='password' placeholder='password' className='name' onChange={getdata} name='password'/>
          </div>
          <a href='#' className='loginToPwdLink'>Forgot password?</a>
          <div className='loginButtonPlace'>

              
              <button className='loginButton' onClick={addData} type="submit">Login</button>
  
          </div>
          <div className='loginToSignupBtnPlace'>
            <Link to={`../signup`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
              <button className='loginToSignupBtn'>Sign Up</button>
            </Link>
          </div>
        </div>
      <ToastContainer />
      </div>
    </div>
  )
}

export default Login

// 로그인 Back버튼(Reading으로 돌아가는) 구현해야할듯
