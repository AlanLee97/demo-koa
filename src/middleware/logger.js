module.exports = function logger() {
    return async function (ctx, next) {
        const { method, url, status } = ctx;
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${method} ${url} ${status} - ${ms}ms`)
    }
}
