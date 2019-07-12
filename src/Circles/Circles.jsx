import React from "react";
import styles from "./Circles.module.css";

function Circles(props) {
  return (
    <div className={styles.Circles}>
      <div
        onClick={() => props.handleClicked(1)}
        className={props.button === 1 ? styles.selected : styles.button}
      >
        1
      </div>
      <div
        onClick={() => props.handleClicked(2)}
        className={props.button === 2 ? styles.selected : styles.button}
      >
        2
      </div>
      <div
        onClick={() => props.handleClicked(3)}
        className={props.button === 3 ? styles.selected : styles.button}
      >
        3
      </div>
      <div
        onClick={() => props.handleClicked(4)}
        className={props.button === 4 ? styles.selected : styles.button}
      >
        4
      </div>
    </div>
  );
}
export default Circles;
