var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res ) {
  res.render('index');

});

module.exports = router;

function createAccountNumber(){
  let accNum= ""
  for (let i = 0; i<5; i++){
    let temp = Math.floor(Math.random()*10);
    accNum += temp;
  }
  return accNum
}
router.post('/card', function(req, res) {
  console.log(req.body.dateOfBirth)
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    dateOfBirth: new Date(req.body.dateOfBirth),
    addressLine1:req.body.addressLine1,
    addressLine2:req.body.addressLine2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    policy: new Date(req.body.policy),
    accountNumber: createAccountNumber(),
    //if you create a new Date with no value, it automatically uses today's date!
    currentDate: new Date(),
    cardClass: getCardClass(req.body.type)
  });
})

function getCardClass(type){
  if (type === "Premium") {
    return "premium"
  } else if (type === "Standard") {
    return "standard"
  } else if (type === "Bronze") {
    return "bronze"
  } else {
    return " "
  }
}