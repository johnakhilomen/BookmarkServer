const knex = require('knex')
const app = require('./app')
const { PORT, DB_URL, HOST, USER, PASSWORD, DB_PORT, DATABASE } = require('./config')

const db = knex({
  client: 'pg',
  //connection: { host: HOST, user: USER, password: PASSWORD, database: DATABASE, port:DB_PORT },
  connection : DB_URL 
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})