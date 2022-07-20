import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Reading.module.css";
import { Link } from "react-router-dom";

function Reading() {
  const [name,setName] = useState();
  const zone = useLocation().state.zone;
  const seatNo = useLocation().state.seatNo;
  const onChange = (event) => {
    setName(event.target.value);
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
      <Link to={`/join`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
        <button>회원 가입</button>
      </Link>
      <br/>
      <input onChange={onChange}></input>
      <Link to={`/success`} state={{ zone: `${zone}`, seatNo: `${seatNo}`, holder:`${name}` }}>
        <button>인식 성공</button>
      </Link>
    </div>
  );
}

export default Reading;
