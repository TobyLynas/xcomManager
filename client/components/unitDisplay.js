import styles from "../components/unitDisplay.module.css";
import React, { useState, useEffect } from "react";
import Modal from "../components/modal.js";
import DeleteComponent from "./delete";
import EditComponent from "./edit";

class UnitDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { soldiers: null, display: false };
    this.callAPI();
  }

  async callAPI() {
    const response = await fetch("http://localhost:9000/users");
    let data = await response.json();
    this.setState({ soldiers: data });
  }

  SoldierGrid(props) {
    let shiftedId = props.data.shift();
    return (
      <tr>
        {props.data.map((value, index) => {
          return (
            <td key={index} className={styles.datum}>
              {value}
            </td>
          );
        })}
        <td>
          <DeleteComponent id={shiftedId} name={props.data[0]} />
        </td>
        <td>
          <EditComponent id={shiftedId} />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <div className={styles.componentPage}>
        {this.state.soldiers && (
          <table className={styles.table}>
            <tbody>
              <tr>
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
              {this.state.soldiers.map((x, i) => (
                <this.SoldierGrid
                  key={i}
                  data={Object.values(this.state.soldiers[i])}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default UnitDisplay;
