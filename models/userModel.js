const db = require("../db/connection");

class UserModel {

    static async findAll(){
        const [rows] = await db.query(
            "SELECT nome, email, criado_em FROM usuarios"
        );

        return rows;
    }

    static async findById(id){
        const [rows] = await db.query(
            "SELECT nome, email, criado_em FROM usuarios WHERE id_usuario =?", [id]
        );

        return rows[0];
    }

    static async createUser(nome, email, senha){
        const [result] = await db.query(
            `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, senha]
        );

        return result;
    }

    static async deleteUser(id){
        const [result] = await db.query(
            "DELETE FROM usuarios WHERE id_usuario =?", [id]
        );

        return result;
    }

    static async uptadeUser(nome, email, senha, id){
        const [result] = await db.query(
            "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id_usuario =?", [nome, email, senha, id]
        )

        return result;
    }

}

module.exports = UserModel;