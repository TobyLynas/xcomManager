import React, { useEffect, useState } from "react";
import styles from "../components/modal.module.css";

const Modal = ({ handleClose, show, data }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;
  const [statsState, setStatsState] = useState();

  const infoCall = async (data, setStatsState) => {
    const response = await fetch(`http://localhost:9000/users/${data}`);
    const stats = await response.json();
    setStatsState(stats[0]);
  };

  useEffect(() => {
    infoCall(data, setStatsState);
  }, []);

  const handleEdit = async (data, event) => {
    const res = await fetch(`http://localhost:9000/users/${data}`, {
      body: JSON.stringify({
        name: event.target.soldierName.value,
        health: event.target.health.value,
        aim: event.target.aim.value,
        mobility: event.target.mobility.value,
        will: event.target.will.value,
        armour: event.target.armour.value,
        dodge: event.target.dodge.value,
        hack: event.target.hack.value,
        className: event.target.class.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  };
  return (
    <form onSubmit={() => handleEdit(data, event)}>
      <div className={showHideClassName}>
        {statsState && (
          <div className={styles.modalMain}>
            <div className={styles.entryText}>Enter your soldier details</div>
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
                  <td className={styles}>
                    <input
                      id="soldierName"
                      className={styles.wideInput}
                      defaultValue={statsState.name}
                    />
                  </td>
                  <td>
                    <input
                      id="health"
                      className={styles.input}
                      defaultValue={statsState.health}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      id="mobility"
                      className={styles.input}
                      defaultValue={statsState.mobility}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      id="aim"
                      className={styles.input}
                      defaultValue={statsState.aim}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      id="will"
                      className={styles.input}
                      defaultValue={statsState.will}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      id="armour"
                      className={styles.input}
                      defaultValue={statsState.armour}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      id="dodge"
                      className={styles.input}
                      defaultValue={statsState.dodge}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      id="hack"
                      className={styles.input}
                      defaultValue={statsState.hack}
                      type="number"
                    />
                  </td>
                  <td className={styles.class}>
                    <select id="class">
                      <option>Assualt</option>
                      <option>Grenadier</option>
                      <option>Gunner</option>
                      <option>Ranger</option>
                      <option>Sharpshooter</option>
                      <option>Shinobi</option>
                      <option>Specialist</option>
                      <option>Technical</option>
                      <option>Psi Operative</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className={styles.cancelButton}
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button className={styles.submitButton} type="submit">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </form>
  );
};

export default Modal;
