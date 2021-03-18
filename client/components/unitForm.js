import styles from './unitForm.module.css'

const UnitForm = () => {    
    return (
            <form className={styles.formMain} onSubmit={console.log('Sumbitted')}>
                <label htmlFor="unit">Name:
                    <input className={styles.nameInput} id="soldierName" type="text" required />
                </label>
                <label>Health
                    <input className={styles.input} type="number" id="health"/>
                </label>
                <label>Mobility:
                    <input className={styles.input} type="number" id="mobility"/>
                </label>
                <label>Aim:
                    <input className={styles.input} type="number" id="aim"/>
                </label>
                <label>Will:
                    <input className={styles.input} type="number" id="will"/>
                </label>
                <label>Armour:
                    <input className={styles.input} type="number" id="armour"/>
                </label>
                <label>Dodge:
                    <input className={styles.input} type="number" id="dodge"/>
                </label>
                <label>Hack:
                    <input className={styles.input} type="number" id="hack"/>
                </label>
                <label> ClassInput:
                <select className={styles.classInput} id="class">
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
                <button className={styles.subButton} type="submit">Submit</button>
            </form>
    )}


export default UnitForm