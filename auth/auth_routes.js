const express = require('express');
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authorize} = require('./middleware');

const config = require('../config');
const knex = require('../knex/knex.js');

//const app = express();
//app.use(bodyParser.json());

const router = express.Router();
router.use(bodyParser.json());

const generateToken = (data) => {
    return jwt.sign(data, config.secret, {expiresIn:config.token_timeout})
}

router.post('/register',(req,res)=>{
const user = req.body;
bcrypt.hash(req.body.password, 10).then(passwordHash => {
  knex('users').returning(['id','email']).insert({...user,
    password: passwordHash,
    user_name: req.body.email,
    created_at: new Date(), 
    updated_at: new Date()
  })
  .then(data => {
    const jwtToken = generateToken({id:data[0].id,email:data[0].email});  
    knex('users').where({id:data[0].id})
      .update({auth_token:jwtToken})
      .then(data => {
        res.send({inserted:true,token:jwtToken})
      })
      .catch(err => console.error(err));
    })
    .catch(err => res.status(400).send({status:'Failure', message: err}));
  })
});

router.post('/login',(req,res)=>{
  const cred = req.body; //username and password
  knex('users').returning('password').where({user_name:cred.username})
  .then(data => {
    bcrypt.compare(cred.password, data[0].password)
      .then(valid => {
        if(valid){
          const jwtToken = generateToken({id:data[0].id,email:data[0].email});  
          knex('users').where({user_name:cred.username})
            .update({auth_token:jwtToken})
            .then(data => {
              res.send({success:true,token:jwtToken})
            })
            .catch(err => console.error(err));
          }
        else {
          res.send({success:false});
        }
      });
  })
  .catch(error => res.send({success:false}));
});

router.get('/logout', authorize, (req,res)=>{
  const id = req.decoded.id;
  knex('users').where({id})
  .update({auth_token:''})
  .then(data => {
    res.send({success:true})
  })
  .catch(err => res.send({success:false,message:err}));
});

router.post('/password/forgot', (req,res) => {
  //get phone no. or email
  res.send({success:false, message: 'To be implemented'});//send verification code to phone and email
});

router.post('/password/reset', (req,res) => {
  //get phone no. or email and verification code
  //clear password in system
  res.send({success:false, message: 'To be implemented'});//send auth token with short validity
});
  
router.post('/password/change', authorize, (req,res) => {
  //get new password
  //update encoded password and reset the auth token to empty
  res.send({success:false, message: 'To be implemented'});//send auth token
});

module.exports = router;