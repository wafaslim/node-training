const express = require('express')
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('get All users')
})
router.get('/users/:id', (req, res) => {
    res.send('get by id')
})
router.post('/users', (req, res) => {
    console.log(req.body);
    res.send('add users')
})
router.delete('/users/:id', (req, res) => {
    res.send('delete users')
})
router.put('/users/:id', (req, res) => {
    res.send('update users')
})

module.exports = router