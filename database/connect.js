// getting-started.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("> Successfully opened the database"))
.catch(err => console.log("> Error occurred from the database"));
module.exports = mongoose;