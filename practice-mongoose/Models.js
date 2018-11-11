const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('--------> connect success'))
    .catch(err => console.log('--------> connect failure', err.message));

const schema = mongoose.Schema({
    name: 'string',
    size: 'string'
});

const Tank = mongoose.model('Tank', schema);

// const small = new Tank({ size: 'small' });
// small.save((err, small) => {
//     if (err) return console.log('=====>', err.message);
//     console.log('====> save success');
//     console.log(small);
// });

// or

// Tank.create({ size: 'small' }, (err, small) => {
//     if (err) return console.log('=====>', err.message);
//     console.log('====> save success');
//     console.log(small);
// });

Tank.remove({ size: 'large' }, (err, self) => {
    if (err) return console.log('==========>', err.message);
    console.log('----------->', self);
});
