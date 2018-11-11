const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65 },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    decimal: Schema.Types.Decimal128,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    ofArrays: [[]],
    ofArrayOfNumbers: [[Number]],
    nested: {
        stuff: { type: String, lowercase: true, trim: true }
    }
})

const Thing = mongoose.model('Thing', schema);

const m = new Thing;

m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1, 2, 3, 4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';

console.log('====>', m);
// m.save(null);

// const schema1 = new Schema({
//     test: String // `test` is a path of type String
// });

const schema2 = new Schema({
    test: {
        type: String,
        lowercase: true // Always convert `test` to lowercase
    } // `test` is a path of type string
});

// - required: 布尔值或函数 如果值为真，为此属性添加 required 验证器
// - default: 任何值或函数 设置此路径默认值。如果是函数，函数返回值为默认值
// - select: 布尔值 指定 query 的默认 projections
// - validate: 函数 adds a validator function for this property
// - get: 函数 使用 Object.defineProperty() 定义自定义 getter
// - set: 函数 使用 Object.defineProperty() 定义自定义 setter
// - alias: 字符串 仅mongoose >= 4.10.0。 为该字段路径定义虚拟值 gets/sets

const numberSchema = new Schema({
    intergerOnly: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        alias: 'i'
    }
});

const Number = mongoose.model('Number', numberSchema);

const doc = new Number();
doc.intergerOnly = 2.001

console.log('====>', doc.intergerOnly);
