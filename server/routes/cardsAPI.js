const express = require('express');
const router = express('router');
const Card = require('../models').Card;

router.get('/', (req, res) => {
    res.json('home page');
})

router.get('/queue', ({body: {status}}, res) => {
    Card.findAll({
        where: {
            status: "queue"
        }
    })
    .then(cards => {res.json(cards)})
    .catch(error => {res.json({"error": "error message"})})
})

router.get('/in-progress', ({body: {status}}, res) => {
    Card.findAll({
        where: {
            status: "in-progress"
        }
    })
    .then(cards => {res.json(cards)})
    .catch(error => {res.json({"error": "error message"})})
})

router.get('/done', ({body: {status}}, res) => {
    Card.findAll({
        where: {
            status: "done"
        }
    })
    .then(cards => {res.json(cards)})
    .catch(error => {res.json({"error": "error message"})})
})

router.put('/status/:id', ({body: {status}}, res) => {
    Card.update({
        status: req.params.id
    })
    .then(card => {res.json(card)})
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
    .then(card => {res.json(card)})
    //need to send error messages with connect flash
    .catch(error => {res.json({"error": "error message"})})
})




module.exports = router;