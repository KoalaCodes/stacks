const router = require('express').Router();
const stocksCtrl = require('../controllers/stocks');

router.get('/', stocksCtrl.index);
router.get('/new', isLoggedIn, stocksCtrl.new);
router.post('/', isLoggedIn, stocksCtrl.create);
router.delete('/:id', isLoggedIn, stocksCtrl.delete);
router.get('/investors/:id/edit', isLoggedIn, stocksCtrl.edit)
router.put('/investors/:id', isLoggedIn, stocksCtrl.update);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router