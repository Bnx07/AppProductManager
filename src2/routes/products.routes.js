import Router from 'express';
import productManager from '../dao/fileManagers/productManager.js';

const router = Router();
const pm = new productManager();

router.get('/', (req, res) => {

});

router.post('/:pid', (req, res) => {

});

router.put('/:pid', (req, res) => {

});

router.delete('/:pid', (req, res) => {

});

export default router;