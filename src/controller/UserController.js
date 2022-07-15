const UserService = require('../service/UserService');

class UserController {
    static async getAllUser(ctx) {
        await UserService.getAllUser().then(res => {
            console.log('UserController', res);
            ctx.body = res;
        });
    }
    static async getUserById(ctx) {
        await UserService.getUserById(ctx.params.id).then(res => {
            console.log('UserController', res);
            ctx.body = res;
        });
    }
    static async add(ctx) {
        console.log(ctx.request.body);
        await UserService.add(ctx.request.body).then(res => {
            ctx.body = res;
        });
    }
    static async update(ctx) {
        await UserService.update(ctx.request.body).then(res => {
            console.log('UserController', res);
            ctx.body = res;
        });
    }
    static async delete(ctx) {
        await UserService.delete(ctx.request.body.id).then(res => {
            console.log('UserController', res);
            ctx.body = res;
        });
    }

}

module.exports = UserController