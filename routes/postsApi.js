const express = require('express')
const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('get All posts')
})
router.get('/posts/:id', (req, res) => {
    res.send('get by id')
})
router.post('/posts', (req, res) => {
    res.send('add posts')
})
router.delete('/posts/:id', (req, res) => {
    res.send('delete posts')
})
router.put('/posts/:id', (req, res) => {
    res.send('update posts')
})

module.exports = router