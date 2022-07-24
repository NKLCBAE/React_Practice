import { useState } from "react";
import React from "react"
import { useParams } from "react-router-dom";
import personProfile from '../../kiosk/assets/ZoneA.png'
import { Link } from "react-router-dom"
import Modal from './StatusModal'
// import Select from "react-select";
import './THome.css'

function THome() {
  const seatNo = useParams().seatNo;
  const users = JSON.parse(localStorage.getItem('userLogin'));
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState();
  let name ="";
  function quit(){
    const seats = JSON.parse(localStorage.getItem("seats"));
    seats[seatNo-1].holder=null
    localStorage.setItem('seats', JSON.stringify(seats));
    setCheck(false);   
  }
  // useEffect(wow(),[name]);
  if (check === false) {
    var Interval = setInterval(() => {
      checkID();
    }, 1000);
  }
  
  const checkID = async() => {
    const seats = await JSON.parse(localStorage.getItem("seats"));
    if(seats[seatNo-1].holder!==null){   
      name = seats[seatNo-1].holder; 
      for(let i in users){
        if(users[i].name===name){
          setUser(users[i]);
        }
      }
      setCheck(true);
      clearInterval(Interval);
    }    
  };

  // modal
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // select
  const statusOpt = [
    {value: 'online', label: '온라인'},
    {value: 'offline', label: '오프라인'},
    {value: 'doNotDisturb', label: '방해금지'},
    {value: 'away', label: '자리비움'},
  ]


  const [select, setSelect] = useState(statusOpt[0].value)
  const handleChange = event => {
    setSelect(event.target.value);
  }

  console.log('2'+select)

  return (
  <div>
    {check ? 
      // if:
      <div>
        <div className="tabletHomeMain">
          <div className="tabletPPicArea">
            <div className="pPicInnerArea">
              <img src={personProfile} alt='personProfile' className='personProfileImage'/>
            </div>
          </div>
          <div className="userName">{user.name}</div>
          <div className="userInfo">{user.email}</div>
          <div className="tabletLinkButtons">
            <div className="exitButton">
              <button onClick={quit}>퇴실</button>
            </div>
            <div className="infoButton">
              <Link to={`./editinfo`} state={{seatNo: `${seatNo}`}} className='tabletLinkIconLink'>
                <button>정보수정</button>
              </Link>
            </div>
            <div className="calendarButton">
              <Link to={`./editinfo`} state={{seatNo: `${seatNo}`}} className='tabletLinkIconLink'>
                <button>캘린더</button>
              </Link>
            </div>
            <div className="statusButton">
              <React.Fragment>
                <button onClick={openModal}>{select}</button>
                {/* header 부분에 텍스트를 입력한다. */}
                <Modal open={modalOpen} close={closeModal} header="Modal heading" onClose={closeModal}>
                <div className="selectYourStatus">
                  <select value={select} onChange={handleChange} className="selectStatus">
                    {statusOpt.map(option => (
                      <option key={option.value} value={option.label} defaultvalue={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                </Modal>
              </React.Fragment>
            </div>
            <div className="settingsButton">
              <Link to={`./settings`} state={{seatNo: `${seatNo}`}} className='tabletLinkIconLink'>
                <button>settings</button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      // else:
     : <h1>(회사 로고)</h1>}
  </div>)
  }
export default THome;
