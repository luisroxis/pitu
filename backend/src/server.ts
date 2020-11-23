import app from './app'
import database from './database'

const PORT = 9200
database.sync()

app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`)
})
