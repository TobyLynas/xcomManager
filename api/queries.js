const { request, response } = require('express')

const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})
const getSoldier = (request, response) => {
    pool.query('SELECT * FROM soldiers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw (error)
        }
        response.status(200).json(results.rows)
    })
}

const getSoldierById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM soldiers WHERE id = $1 ', [id], (error, results) => {
        if (error) {
            throw (error)
        }
        response.status(200).json(results.rows)
    })
}

const createSoldier = (request, response) => {
    const { name, health, mobility, aim, will, armour, dodge, hack, className } = request.body
    pool.query(`INSERT INTO soldiers (name, health, mobility, aim, will, armour, dodge, hack, classname) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [name, health, mobility, aim, will, armour, dodge, hack, className], (error ,results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added`)
    })
}

const updateSoldier = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, health, mobility, aim, will, armour, dodge, hack, className } = request.body
    pool.query('UPDATE soldiers SET name = $1, health = $2, mobility = $3, aim = $4, will = $5, armour = $6, dodge = $7, hack = $8 , classname = $9 WHERE id = $10 ', [name, health, mobility, aim, will, armour, dodge, hack, className, id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Added Successfully`)
    })
}

const deleteSoldier = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM soldiers WHERE id=$1', [id], (error, results) =>{
        if (error) {
            throw error
        }
        response.status(200).send('All deleted')
    })
}

module.exports = {
    getSoldier,
    getSoldierById,
    createSoldier,
    updateSoldier,
    deleteSoldier
}