const express = require('express')
const app = express()
const port = 9000
const db = require('./queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.send('I met her in a club down in old Soho, Where you drink champagne and it tastes just like Coca-Cola, C-O-L-A .. .Cola.')
})

app.get('/users', db.getSoldier)
app.get('/users/:id', db.getSoldierById)
app.post('/users', db.createSoldier)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})