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
        let colours=['white','black']
        return <tr >
            {props.data.map((value, index) =>  {return <td className={styles.datum}>{value}</td>})}
            <button className={styles.deleteButton} onClick={(event, id = shiftedId, name = props.data[0])=>{deleteButtonHandle(event, id, name)}}>
                <svg className={styles.trashIcon} fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button className={styles.pencilButton}>
                <img onClick={(event,id=shiftedId)=>editButtonHandle(event,id)} className={styles.pencilIcon} src={'pencil-fill.svg'}/>
            </button>
        </tr>
    }
    const editButtonHandle = (event, id) => {
        console.log(id)
    }

    const deleteButtonHandle = (event, id, name) => {
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