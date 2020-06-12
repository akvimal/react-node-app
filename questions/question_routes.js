const express = require('express');
const bodyParser = require('body-parser');

const knex = require('../knex/knex.js');
const {authorize} = require('../auth/middleware');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req,res)=>{
  knex
  .from('questions')
  .select('id', 'prompt_text', 'prompt_image', 'response_type')
  .then(data => {
    res.status(200).send(data)//console.log(data)
  })
  .catch(err => res.status(400).send({status:'Failure', message: err}));
});

router.post('/', (req,res)=>{
    
    const question = req.body;
    
    knex('questions').returning('id').insert({prompt_text:question.promptText,response_type:question.answerType, created_at:new Date()})
      .then(data => {
        res.send({inserted:true,id:data})//console.log(data)
      })
      .catch(err => res.status(400).send({status:'Failure', message: err}));
});

router.delete('/:id', (req,res)=>{
  
    knex('questions').where({id:req.params.id}).del()
    .then(data => {
      res.send({deleted:true}) 
    })
    .catch(err => {
        res.send({deleted:false}) 
    });
  
});

module.exports = router;