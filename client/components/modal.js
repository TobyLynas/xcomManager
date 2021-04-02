import React, { useEffect, useState } from "react";
import styles from "../components/modal.module.css";

const Modal = ({ handleClose, show, data }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;
  const [statsState, setStatsState] = useState();
  
  const infoCall = async () => {
    const response = await fetch(`http://localhost:9000/users/${data}`);
    const stats = await response.json();
    setStatsState(stats[0]);
  };

  useEffect(()=>{
      infoCall()
  }, [])
  return (
    <div className={showHideClassName}>
      {statsState && (
        <div className={styles.modalMain}>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleClose}
          >
            {" "}
            Cancel
          </button>
          <table className={styles.table}>
            <tbody className={styles.tableBody}>
              <tr className={styles.rowOne}>
                <th className={styles.title}>Name</th>
                <th className={styles.title}>Health</th>
                <th className={styles.title}>Mobility</th>
                <th className={styles.title}>Aim</th>
                <th className={styles.title}>Will</th>
                <th className={styles.title}>Armour</th>
                <th className={styles.title}>Dodge</th>
                <th className={styles.title}>Hack</th>
                <th className={styles.title}>Class</th>
              </tr>
              <tr>
                <td>
                  <input className={styles.wideInput} defaultValue={statsState.name} />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.health}type="number" />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.mobility}type="number" />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.aim}type="number" />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.will} type="number" />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.armour} type="number" />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.dodge} type="number" />
                </td>
                <td>
                  <input className={styles.input} defaultValue={statsState.hack} type="number" />
                </td>
                <td>
                    <select>
                        <option>Assualt</option>
                    </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Modal;
