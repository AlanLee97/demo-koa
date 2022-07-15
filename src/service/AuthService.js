
const UserModel = require('../model/UserModel');
const BaseCRUD = require('../db/BaseCRUD');

const userModelCRUD = new BaseCRUD(UserModel);

class AuthService {
    static async login({ username, password }) {
        return UserModel.findAll({
            where: { username, password }
        });
    }
    static async register({ username, password }) {
        return await UserModel.findAll({
            where: { username }
        }).then(res => {
            if (res.length) {
                return '用户名已存在，请更换用户名';
            }
            return userModelCRUD.add({
                username, password
            });
        })
    }
}

module.exports = AuthService