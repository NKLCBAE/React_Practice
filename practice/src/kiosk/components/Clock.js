import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <span className={styles.clock}>{time.toLocaleTimeString()}</span>
    </div>
  );
}

export default Clock;
