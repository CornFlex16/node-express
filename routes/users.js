const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    //res.send("List Users")
    res.render('listofUser');

 });
 router.get('/new', (req, res)=>{
    res.send("Create New user 12312312312")
 });

router.get('/old', (req, res)=>{
    res.send("Old user")
});


router.get('/registration', (req, res)=>{
   res.render("registration")

});

router.get('/identification/:vic/:sam/:apple', (req, res)=>{
   //console.log(req.params.id);    
   //res.send(`The ID is ${req.params.vic}`) 
   
   const sum =  Number(req.params.vic) + Number(req.params.sam);
   const mul =  Number(req.params.vic) * Number(req.params.sam);
   const divi =  Number(req.params.vic) / Number(req.params.sam);
   const subs =  Number(req.params.vic) - Number(req.params.sam);

   //res.send(`The ID is ` + sum + ' ' + mul + ' ' + divi +' ' + subs) 
   const obj = { total:sum, multiplication:mul, division:divi, substraction:subs }
   res.render('listofUser', obj)
   
});

//localhost:3000/users/save-registration
router.post('/save-registration', (req, res)=>{
  let fn =  req.body.firstname
  let ln =  req.body.lastname
   res.render('welcome', { firstname:fn, lastname:ln } ) 
})



module.exports = router //