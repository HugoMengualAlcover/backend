const mongoose = require('mongoose');

const URI = 'mongodb+srv://progresa:progresa@cluster0.xsnp4yv.mongodb.net/rila2';

mongoose.connect(URI)
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;