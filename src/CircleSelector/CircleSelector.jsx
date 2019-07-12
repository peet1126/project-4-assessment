import React from "react";
import styles from "./CircleSelector.module.css";

function CircleSelector(props) {
  return (
    <div className={styles.CircleSelector}>
      <button
        onClick={() => props.handleClicked(1)}
        className={props.button === 1 ? styles.selected : styles.button}
      >
        SELECT CIRCLE 1
      </button>
      <button
        onClick={() => props.handleClicked(2)}
        className={props.button === 2 ? styles.selected : styles.button}
      >
        SELECT CIRCLE 2
      </button>
      <button
        onClick={() => props.handleClicked(3)}
        className={props.button === 3 ? styles.selected : styles.button}
      >
        SELECT CIRCLE 3
      </button>
      <button
        onClick={() => props.handleClicked(4)}
        className={props.button === 4 ? styles.selected : styles.button}
      >
        SELECT CIRCLE 4
      </button>
    </div>
  );
}
export default CircleSelector;
