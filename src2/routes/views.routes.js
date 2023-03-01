import { Router } from "express";
import productManager from "../dao/fileManagers/productManager.js";
import transactionManager from "../dao/fileManagers/transactionManager.js";

const router = Router();
const tm = new transactionManager();
const pm = new productManager

router.get('/?', async (req, res) => {
    let {type, param} = req.query;
    let invalid = false;
    
    if (type == undefined || param == undefined) {
        let products = await pm.getAll();
        // Limitar cantidad a x numero
        return res.render('home', {products, invalid});
    }
    
    let products = await pm.getOne(type, param);
    if (!products) {
        invalid = true;
    }
    return res.render('home', {products, isFilter: true, invalid});
})

router.get('/newTransaction', (req, res) => {
    res.render('newTransaction');
})

router.get('/newProduct', (req, res) => {
    res.render('newProduct');
})

router.get('/allTransactions', async (req, res) => {
    let transactions = await tm.getAll();
    let orderedTransactions = [];
    let length = transactions.length;

    for (var i = 0; i < length; i++) {
        var element = transactions.pop();
        orderedTransactions.push(element);
    }

    transactions = orderedTransactions;
    res.render('allTransactions', {transactions});
})

router.get('/editProduct/:pid', async (req, res) => {
    let pid= req.params.pid;
    let product = await pm.getOne('id', pid);
    product = product[0];
    res.render('editProduct', {product});
})

export default router;