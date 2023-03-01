import express from 'express';
import __dirname from './utils.js';

import transactionsRouter from './routes/transactions.routes.js'
import productRouter from './routes/products.routes.js';
import viewsRouter from './routes/views.routes.js';

import handlebars from 'express-handlebars';

const app = express();
const port = 8080;                                                                                            //     /DataBase?

app.engine('handlebars', handlebars.engine());
app.set("views", __dirname+"/views");
app.set("view engine", 'handlebars');
app.use('/', viewsRouter);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/transactions', transactionsRouter);
app.use('/api/products', productRouter);

const httpServer = app.listen(port, () => console.log(`Server listening on port ${port}`));