import {Sequelize} from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Erx458203@',
  database: 'pitu'
})

export default sequelize
