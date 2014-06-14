var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* Post to host.*/
router.post('/host', function(req, res) {
  /*
  var user = new User({ name: req.body.name,
                       email: req.body.email});
  user.save(function(err){
    if(err) {
      
      consol.log('Error inserting the user',err);
      next();
      
    }
    
    res.render('members',{ title: 'Members Home'});
    
  });
  */
});

router.get('/host', function(req, res) {
   res.render('host', { title: 'host' });
});

/* Post to client.*/
router.post('/client', function(req, res) {
  /*
  var user = new User({ name: req.body.name,
                       email: req.body.email});
  user.save(function(err){
    if(err) {
      
      consol.log('Error inserting the user',err);
      next();
      
    }
    
    res.render('members',{ title: 'Members Home'});
    
  });
  */
});

router.get('/client', function(req, res) {
   res.render('client', { title: 'client' });
});

module.exports = router;
