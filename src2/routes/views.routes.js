import Router from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {products});
})

router.get('/transactions', (req, res) => {
    res.render('allTransactions', {transactions});
})

router.get('/newTransaction', (req, res) => {
    res.render('newTransaction');
})

router.get('/newProduct', (req, res) => {
    res.render('newProduct');
})

export default router;