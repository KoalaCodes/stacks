const router = require('express').Router()
const investorCtrl = require('../controllers/investors');

router.get('/', investorCtrl.show)
// router.post('investors', investorCtrl.create)





module.exports = router;