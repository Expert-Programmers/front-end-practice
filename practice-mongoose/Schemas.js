const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// const blogSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// });
// const Blog = mongoose.model('Blog', blogSchema);

// define a schema
// const animalSchema = new mongoose.Schema({
//     name: String,
//     type: String,
//     tags: { type: [String], index: true }
// });

// // assign a function to the "methods" object of our animalSchema
// animalSchema.methods.findSimilarTypes = function (cb) {
//     console.log('====>', this);
//     return this.model('Animal').find({ type: this.type }, cb);
// }

// animalSchema.statics.findByName = function (name, cb) {
//     return this.find({ name: new RegExp(name, 'i') }, cb);
// }

// animalSchema.query.byName = function (name) {
//     return this.find({ name: new RegExp(name, 'i') });
// }

// const Animal = mongoose.model('Animal', animalSchema);

// Animal.on('index', function (err) {
//     console.log('====>', err);
// });

// define a schema
const personSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    }
});

personSchema.virtual('fullName')
    .get(function () { return this.name.first + ' ' + this.name.last; })
    .set(function (v) {
        this.name.first = v.substr(0, v.indexOf(' '));
        this.name.last = v.substr(v.indexOf(' ') + 1,);
    });

// compile our model
const Person = mongoose.model('Person', personSchema);

// create a document
const axl = new Person({
    name: { first: 'Axl', last: 'Rose' }
});

axl.fullName = 'Foo bar';

console.log('====>', axl.fullName);
