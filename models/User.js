const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define("user",
    {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    criado_em: DataTypes.DATE
    },{
        tableName: "usuarios",
        timestamps: false
    }
)

module.exports = User;

