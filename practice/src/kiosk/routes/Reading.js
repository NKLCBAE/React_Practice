import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Reading.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Reading() {
  const zone = useLocation().state.zone;
  const seatNo = useLocation().state.seatNo;
  const users = JSON.parse(localStorage.getItem('userLogin'));
  const navigate = useNavigate()
  const onClick = () => {
      const name = users[Math.floor(Math.random() * users.length)].name;
      console.log(name);
      navigate('../success', { state: { zone: `${zone}`, seatNo: `${seatNo}`, name: name } })
  }
  return (
    <div>
      <h1>여기는 카드리딩 페이지</h1>
      <div className={styles.cardReading}>
        <p>
          선택하신 좌석은{zone}구역 {seatNo}번 입니다!
        </p>
        <h1>회원증을 인식시켜주세요</h1>
      </div>
      <Link to={`/`}>
        <button>자리 선택</button>
      </Link>
      <Link to={`/login`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
        <button> 로그인</button>
      </Link>
      <Link to={`/signup`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
        <button>회원 가입</button>
      </Link>
      <br />
      <button onClick={onClick}>랜덤 카드 인식</button>
    </div>
  );
}

export default Reading;
