const User = require("../models/User");

class UserModel {

    static async findAll(){
        return await User.findAll({
            attributes: ["nome", "email", "criado_em"]
        });
    }

    static async findById(id){
        return await User.findByPk(id, {
            attributes: ["nome", "email", "criado_em"]
        });
    }

    static async createUser(nome, email, senha){
        return await User.create({
            nome,
            email,
            senha
        })
    }

    static async deleteUser(id){
        return await User.destroy({
            where: {
                id_usuario: id
            }
        });
    }

    static async uptadeUser(nome, email, senha, id){
        return await User.update({
            nome,
            email,
            senha
        },
        {
            where: {
                id_usuario: id
            }
        }
        )
    }
}

module.exports = UserModel;