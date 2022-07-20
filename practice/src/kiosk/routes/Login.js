import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login() {
  const zone = useLocation().state.zone;
  const seatNo = useLocation().state.seatNo;
  return (
    <div>
      <h1>여기는 로그인 페이지</h1>
      <Link to={`/reading`} state={{ zone: `${zone}`, seatNo: `${seatNo}` }}>
        <button>이전으로</button>
      </Link>
    </div>
  );
}

export default Login;
