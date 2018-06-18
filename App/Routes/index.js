import express from 'express';
import persons from './persons';

var router = express.Router();

router.use('/persons',persons);

router.get('/',(req,res) =>{
  res.send(`<h1> welcome to you in graphQL project </h1>`);
});

export default router ;
