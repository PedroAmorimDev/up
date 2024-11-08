import conn from "../config/conn.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const Users = conn.define("users",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Users.beforeCreate(async (user)=>{
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
})

const syncDatabase = async () => {
    try{
        await conn.authenticate();
        console.log("Conexão estabelecida com sucesso!")

        await Users.sync();
        console.log("Tabela de usuários criada com sucesso!")
    }catch(error){
        console.error("Erro ao criar a tabela!", error)
    }
}

syncDatabase();

export default Users;