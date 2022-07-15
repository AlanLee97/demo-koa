const AuthService = require('../service/AuthService');


class AuthController {
    static async login(ctx) {
        await AuthService.login(ctx.request.body).then(res => {
            ctx.body = res;
        })
    }
    static async register(ctx) {
        await AuthService.register(ctx.request.body).then(res => {
            ctx.body = res;
        })
    }
}

module.exports = AuthController;