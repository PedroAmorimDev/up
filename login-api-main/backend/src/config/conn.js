import { Sequelize } from 'sequelize';

const conn = new Sequelize("users", "root", "root", {
    host: "localhost",
    dialect:'mysql'
})

export default conn;