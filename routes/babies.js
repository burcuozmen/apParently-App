const router = require('express').Router();
let {Baby} = require('../models/User');
router.route('/').get((req, res) => {
 Baby.find()
    .then(babies => res.json(babies))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
 const babyname = req.body.babyname;
const newBaby = new Baby({ babyname });
newBaby.save()
  .then(() => res.json('Baby added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;