
const UserModel = require('../model/UserModel');
const BaseCRUD = require('../db/BaseCRUD');

const userModelCRUD = new BaseCRUD(UserModel);

class UserService {
    static getAllUser() {
        return userModelCRUD.getAll();
    }
    static getUserById(id) {
        return userModelCRUD.getById(id);
    }
    static add(user) {
        return userModelCRUD.add(user);
    }
    static update(user) {
        return userModelCRUD.update(user);
    }
    static delete(id) {
        return userModelCRUD.delete(+id);
    }
}

module.exports = UserService