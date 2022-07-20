import { useState } from "react";
import { Link } from "react-router-dom";
import ZoneA from "../components/Home/ZoneA";
import ZoneB from "../components/Home/ZoneB";
import ZoneC from "../components/Home/ZoneC";
import ZoneD from "../components/Home/ZoneD";

function Home() {
  // localStorage.setItem('seats',JSON.stringify( [
  //   { id: "01", top: "178px", left: "290px", holder: null },
  //   { id: "02", top: "178px", left: "365px", holder: null },
  // ]));
  
  const [zone, setZone] = useState("A");
  const setA = () => {
    setZone("A");
  };
  const setB = () => {
    setZone("B");
  };
  const setC = () => {
    setZone("C");
  };
  const setD = () => {
    setZone("D");
  };

  return (
    <div>
      <h1>여기가 메인임당</h1>
      <h2>빈좌석은 초록색</h2>
      <h3>여기는 존 {zone}</h3>
      <button onClick={setA}>ZoneA</button>
      <button onClick={setB}>ZoneB</button>
      <button onClick={setC}>ZoneC</button>
      <button onClick={setD}>ZoneD</button>
      <Link to={`/admin`}>
        <button>관리자 페이지</button>
      </Link>
      {zone === "A" ? <ZoneA /> : null}
      {zone === "B" ? <ZoneB /> : null}
      {zone === "C" ? <ZoneC /> : null}
      {zone === "D" ? <ZoneD /> : null}

    </div>
  );
}
export default Home;
