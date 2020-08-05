const router = require('express').Router();
const stocksCtrl = require('../controllers/stocks');

router.get('/', stocksCtrl.index);
router.get('/new', stocksCtrl.new);
router.post('/', stocksCtrl.create);
router.delete('/:id', stocksCtrl.delete);



module.exports = router