import { useState } from "react";
import { useParams } from "react-router-dom";

function THome() {
  const seatNo = useParams().seatNo;
  console.log(seatNo);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState();
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
      setName(await seats[seatNo-1].holder);
      setCheck(true);
      clearInterval(Interval);
    }    
  };
  return <div>{check ? <div><h1>{name}님 ㅎㅇ</h1><button onClick={quit}>퇴실</button></div> : <h1>(회사 로고)</h1>}</div>;
}
export default THome;
