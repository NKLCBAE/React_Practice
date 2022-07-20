import React,{ useEffect, useState, useRef } from "react";
import ZoneAImgage from "../../assets/ZoneA.png";
import styles from "./ZoneA.module.css";
import { Link } from "react-router-dom";

function ZoneA() {
  const [loading, setLoading] = useState(true);
  const [seats, setSeats] = useState();

  function useInterval(callback,delay){
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    },[callback]);
 
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if(delay !== null){
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },[delay])
  }

  useInterval(() => {
    setSeats(JSON.parse(localStorage.getItem('seats')));
    setLoading(false);
  }, 1000);

  

  return (
    <div>{loading? <h1>로딩중</h1>:
    <div className={styles.image}>
      <img src={ZoneAImgage} alt="ZoneA" />

      {seats.map((seat) => (
        seat.holder===null?
        <Link
          to={`/reading`}
          state={{ zone: "A", seatNo: `${seat.id}` }}
          key={seat.id}
        >
          <button
            style={{ left: `${seat.left}`, top: `${seat.top}` }}
            key={seat.id}
            id={seat.id}
            className={styles.seat}
          >
            {seat.id}
          </button>
        </Link>:          <button
            style={{ left: `${seat.left}`, top: `${seat.top}` }}
            key={seat.id}
            id={seat.id}
            className={styles.noseat}
          >{seat.holder}</button>
      ))}
    </div>}
    </div>
  );
}
export default ZoneA;

    // 좌석DB에서 해당 좌석의 holder가 null 인것만 가져와서 보여주기