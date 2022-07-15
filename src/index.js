const Koa = require('koa');
const app = new Koa();
const logger = require('./middleware/logger');
const router = require('./router/index');

const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

app.use(cors());
app.use(bodyParser());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

