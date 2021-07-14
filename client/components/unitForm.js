import styles from "./unitForm.module.css";
import React, { useState } from "react";

const UnitForm = () => {
  const postUnit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:9000/users", {
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
      method: "POST",
    });
    location.reload();
  };
  let [accordionState, setAccordionState] = useState(false);
  return (
    <div className={styles.component}>
      <button
        className={styles.accordion}
        onClick={() => {
          setAccordionState(!accordionState);
        }}
      >
        Add Soldier
        <img
          className={
            accordionState === true ? styles.chevronShow : styles.chevronHide
          }
          src="/chevron-right.svg"
        />
      </button>
      <div
        className={
          accordionState === true ? styles.accordionHide : styles.accordionShow
        }
      >
        <form
          onSubmit={postUnit}
          method="POST"
          className={
            accordionState === true ? styles.formMainHide : styles.formMain
          }
        >
          <div className={styles.entryText}>Enter your soldiers details</div>
          <label htmlFor="unit" className={styles.nameLabel}>
            Name:
            <input
              className={styles.wideInput}
              id="soldierName"
              type="text"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Health
            <input
              className={styles.numInput}
              type="number"
              id="health"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Mobility:
            <input
              className={styles.numInput}
              type="number"
              id="mobility"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Aim:
            <input
              className={styles.numInput}
              type="number"
              id="aim"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Will:
            <input
              className={styles.numInput}
              type="number"
              id="will"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Armour:
            <input
              className={styles.numInput}
              type="number"
              id="armour"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Dodge:
            <input
              className={styles.numInput}
              type="number"
              id="dodge"
              required
            />
          </label>
          <label className={styles.numLabel}>
            Hack:
            <input
              className={styles.numInput}
              type="number"
              id="hack"
              required
            />
          </label>
          <label className={styles.classLabel}>
            {" "}
            ClassInput:
            <select className={styles.wideInput} id="class" required>
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
          </label>
          <button className={styles.subButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnitForm;
