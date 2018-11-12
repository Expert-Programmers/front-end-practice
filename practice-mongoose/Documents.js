const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('====> success.'))
    .catch(err => console.log('===> failure.', err.message));

const schema = mongoose.Schema({
    name: 'string',
    size: 'string'
});

const Tank = mongoose.model('Tank', schema);

// Tank.findById(0, function (err, tank) {
//     if (err) return console.log('====> not found');

//     tank.size = 'large';
//     tank.save(function (err, updatedTank) {
//         if (err) return console.log('====> save error');
//     });
// });

Tank.findById(0, function (err, tank) {
    if (err) return console.log('====>', err.message);

    tank.set({ size: 'large' });
    tank.save(function (err, updatedTank) {
        if (err) return console.log('---->', err.message);
    });
});

Tank.update({ _id: 0 }, { $set: { size: 'large' } }, function (err, updatedTank) {
    if (err) return console.log('---->', err.message);
});
