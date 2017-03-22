const express = require('express');
const router = express('router');
const Card = require('../models').Card;

router.get('/', (req, res) => {
    res.json('home page');
})

router.post('/new', ({body: {title, priority, created_by, assigned_to}}, res) => {
    console.log(title)
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