const router = require('express').Router();
const stocksCtrl = require('../controllers/stocks');

router.get('/', stocksCtrl.index);
router.get('/new', stocksCtrl.new);
router.post('/', stocksCtrl.create);
router.delete('/:id', stocksCtrl.delete);
router.get('/investors/:id/edit', stocksCtrl.edit)
router.put('/investors/:id', stocksCtrl.update);



module.exports = router