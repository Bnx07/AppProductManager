import { Router } from "express";
import productManager from "../dao/fileManagers/productManager.js";

const router = Router();
const pm = new productManager();

router.get('/', async(req, res) => {
    let data = await pm.getAll()
    res.send({status: "Ok", payload: data});
})

router.post('/', async(req, res) => {
    let {title, stock, price, thumbnail, category} = req.body;

    title = title.trim();
    category = category.trim();

    if (!title || !stock || !price || !category) {
        return res.status(400).send({status: "error", message: "Fill all inputs"});
    }

    const exists = await pm.getOne('title', title);

    if (exists != false) return res.status(400).send({status: "error", message: "Ya existe un producto con ese nombre"})

    let newProduct = {
        title,
        stock,
        price,
        thumbnail,
        category
    }

    let objects = await pm.createOne(newProduct);
    res.send({status: "Ok", message: objects});
})

router.put('/', async(req, res) => {
    const product = req.body;
    const all = await pm.getAll();
    
    let exists = all.findIndex(element => element.title == product.title);

    if (exists != -1) {
        if (all[exists].id != product.id) {
            return res.status(400).send({status: "error", message: "Ya existe un producto con ese nombre"})
        }
    }

    const object = pm.editOne(product);

    res.send({status: "Ok", message: object});
})

export default router;
