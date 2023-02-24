import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

import viewsRouter from "./routes/views.routes.js";
import productsRouter from "./routes/products.routes.js";
import transactionsRouter from "./routes/transactions.routes.js"

const port = 8080; // Puerto de inicialización
const app = express();

app.engine("handlebars", handlebars.engine());

app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('/api/transactions', transactionsRouter);

const httpServer = app.listen(port, () => console.log(`Listening on port ${port}`));