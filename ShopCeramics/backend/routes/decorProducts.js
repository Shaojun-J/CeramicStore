const express = require('express');

const router = express.Router();

router.get('/', (req,res) =>{
    res.json({msg: 'GET all home dero products'});
})

router.get('/:id', (req,res) =>{
    res.json({msg: 'GET a single home dero product'});
})

router.post('/', (req, res) =>{
    res.json({msg: 'POST a home dero product'});
})

router.delete('/:id', (req, res) =>{
    res.json({msg: 'DELETE a home dero product'});
})

router.patch('/:id', (req, res) =>{
    res.json({msg: 'UPDATE a home dero product'});
})

module.exports = router;