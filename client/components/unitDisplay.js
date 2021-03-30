import styles from '../components/unitDisplay.module.css'
import React, { useState, useEffect } from 'react'


const unitDisplayGrid = (props) => {

    const [soldiers, setSoldiers] =  useState(null);
    async function getAPI(){
        const response = await fetch("http://localhost:9000/users");
        let data = await response.json();
        setSoldiers(data)
    }

    useEffect(() => {
        getAPI()
     }, [] );

    const SoldierGrid = (props) => {
        let shiftedId = props.data.shift()
        return <tr >
            {props.data.map((value, index) =>  {return <td className={styles.datum}>{value}</td>})}
            <button className={styles.deleteButton} onClick={(event, id = shiftedId, name = props.data[0])=>{deleteButtonPress(event, id, name)}}>
                <img className={styles.trashCan} src={'trash.svg'}/>
            </button>
        </tr>
    }
    const deleteButtonPress = (event, id, name) => {
        event.preventDefault();
        let conf = confirm(`You are about to remove '${name}' from the database. Click OK to continue. This cannot be undone.`)
        conf ? deleteCall(id) : {}
    }
    const deleteCall = async (id) => {
        console.log(id)
        const res = await fetch(`http://localhost:9000/users/${id}`,
        {
            body: JSON.stringify({
                id: {id} 
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }
          )
          location.reload()
    }
    return(
        <div className={styles.componentPage} >
            {soldiers && (
                <table className={styles.table}>
                    <tbody >
                        <tr >
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
                        {soldiers.map((x, i) =><SoldierGrid data={Object.values(soldiers[i])} />)}
                    </tbody>
                </table>
            )}
        </div>
        )
}


export default unitDisplayGrid








        // for (let i = 0; i < 9; i++){
        //     console.log(`the number is ${i}`)
        // }

        // return(
        //     <div className={styles.name}>{props.datum[1]}</div>
        // )