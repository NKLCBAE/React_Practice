import React from "react";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Success() {
  const zone = useLocation().state.zone;
  const seatNo = useLocation().state.seatNo;
  const holder = useLocation().state.holder;
  const seats = JSON.parse(localStorage.getItem('seats'));
  const jam = '[{"id":"01","top":"178px","left":"290px","holder":null},{"id":"02","top":"178px","left":"365px","holder":"bae"}]';
  async function check(){
  for (const i in seats) {
    if (seats[i].id === seatNo) {
      seats[i].holder = await holder;
      console.log(seats);
      localStorage.setItem('seats', JSON.stringify(seats));
    }
  }
}
localStorage.setItem('seats',JSON.stringify(jam));
check();


  return (
    <div>
      <h1>
        {holder}님께 {zone}구역 {seatNo}번 좌석이 배정되었습니다.
      </h1>
      <meta httpEquiv="refresh" content="5; url=http://localhost:3000/" />
    </div>
  );
}

export default Success;

// 좌석DB에서 해당 좌석의 holder 값을 회원 이름으로 설정하기
