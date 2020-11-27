import {Sequelize} from 'sequelize'
import * as Env from 'dotenv'

const sequelize = new Sequelize({
  dialect: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Erx458203@',
  database: 'pitu'
})

export default sequelize
