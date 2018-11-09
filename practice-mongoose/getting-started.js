const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

db.on('error', console.error.bind(console, '=========> connection error:'));

const kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log('=========>', greeting);
};

const Kitten = mongoose.model('kitten', kittySchema);

// const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });

Kitten.find((err, kittens) => {
    if (err) return console.error('==========>', err);
    console.log(kittens);
});
