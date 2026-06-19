const UserModel = require("../models/userModel");

class UserController{
    static async getUsers(req, res){
        const users = await UserModel.findAll();

        if(users.length === 0){
            return res.json({
                message : "Nenhum usuário cadastrado"
            });
        }

        res.json(users);
    }

    static async listUser(req, res){
        const { id } = req.params;

        const user = await UserModel.findById(id);

        res.json({  message: "Usuario encontrado", user});
    }

    static async createUser(req, res){
        const { nome, email, senha } = req.body;

        if(!nome || !email || !senha){
            return res.status(400).json({
                message : "Dados inválidos"
            });
        }

        const result = await UserModel.createUser(
            nome,
            email,
            senha
        );

        res.status(201).json({
            id_usuario: result.insertId,
            nome,
            email
        });
    }

    static async deleteUser(req, res){
        const { id } = req.params;

        const user = await UserModel.findById(id);

        if(!user){
            return res.status(404).json({
                message : "Usuario não encontrado"
            });
        }

        await UserModel.deleteUser(id);

        res.json({
            message: "Usuario Removido"
        });
    }

    static async uptadeUser(req, res){

        const { id } = req.params;

        const { nome, email, senha } = req.body;

        const result = await UserModel.uptadeUser(nome, email, senha, id);

        res.json({
            nome,
            email,
            senha
        });

    }
}

module.exports = UserController;