var express = require('express');
var router = express.Router();

router.get('/employees', (req, res) => {
  let query = "select * from employees order by id asc";
  db.query(query, (err, result) => {
    if (err) {
      res.redirect('/');
    }
    res.json(result);
  });
});

module.exports = router;