const mongoose = require('mongoose'); // this line is to allow the mongoose package to be utilized

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/investors', {
    useNewUrlParser: true, //these few lines are to prevent deprecated conventions 
    // it represents the ability to parse strings
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
