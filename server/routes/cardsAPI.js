const express = require('express');
const router = express('router');
const Card = require('../models').Card;

router.get('/', (req, res) => {
    res.json('home page');
})

router.get('/all', (req, res) => {
    Card.findAll()
    .then(cards => {console.log(cards);res.json(cards)})
    .catch(error => {res.json({"error": "error message"})})
})

router.put('/:status/:id', (req, res) => {
    console.log(req.params.status)
    Card.update({
        status: req.params.status
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(card => {
        res.json({status: req.params.status, id: parseInt(req.params.id)})
    })
    .catch(error => {res.json({"error": "error message"})})
})

router.post('/new', ({body: {title, priority, created_by, assigned_to}}, res) => {
    Card.create({
        title,
        priority,
        status: "queue",
        created_by,
        assigned_to
    })
    .then(result => {res.json(result)})
    //need to send error messages with connect flash
    .catch(error => {res.json({"error": "error message"})})
})

router.put('/edit/:id', ({body: {title, priority, assigned_to}}, res) => {
    Card.update({
        title,
        priority,
        assigned_to
    }, {
        where: {
            id: req.params.id
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    Card.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(result => {res.json({id: parseInt(req.params.id)})})
    .catch(error => {res.json({"error": "error message"})})
})




module.exports = router;