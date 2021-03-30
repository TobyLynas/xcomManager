import styles from './unitForm.module.css'

const UnitForm = () => {
        const postUnit = async event => {
            event.preventDefault()
            const res = await fetch('http://localhost:9000/users',
            {
              body: JSON.stringify({
                name: event.target.soldierName.value,
                health: event.target.health.value,
                aim: event.target.aim.value,
                mobility: event.target.mobility.value,
                will: event.target.will.value,
                armour: event.target.armour.value,
                dodge: event.target.dodge.value,
                hack: event.target.hack.value,
                className: event.target.class.value
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
            )
            location.reload()
        }
    return (
            <form onSubmit={postUnit} method="POST" className={styles.formMain}>
                <label htmlFor="unit">Name:
                    <input className={styles.wideInput} id="soldierName" type="text" required/>
                </label>
                <label>Health
                    <input className={styles.input} type="number" id="health" required/>
                </label>
                <label>Mobility:
                    <input className={styles.input} type="number" id="mobility" required/>
                </label>
                <label>Aim:
                    <input className={styles.input} type="number" id="aim" required/>
                </label>
                <label>Will:
                    <input className={styles.input} type="number" id="will" required/>
                </label>
                <label>Armour:
                    <input className={styles.input} type="number" id="armour" required/>
                </label>
                <label>Dodge:
                    <input className={styles.input} type="number" id="dodge" required/>
                </label>
                <label>Hack:
                    <input className={styles.input} type="number" id="hack" required/>
                </label>
                <label> ClassInput:
                <select className={styles.wideInput} id="class" required >
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
                
                <button className={styles.subButton} type="submit">Submit!</button>
            </form>
    )}


export default UnitForm