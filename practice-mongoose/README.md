https://cn.mongoosedoc.top/docs/

允许使用的 SchemaTypes 有:

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array

---------------------------------------------------------

Schemas 有很多可配置选项，你可以在构造时传入或者直接 set：

```JavaScript
new Schema({..}, options);

// or

var schema = new Schema({..});
schema.set(option, value);
```

### Valid options:

- autoIndex
- bufferCommands
- capped
- collection
- id
- _id
- minimize
- read
- shardKey
- strict
- strictQuery
- toJSON
- toObject
- typeKey
- validateBeforeSave
- versionKey
- collation
- skipVersioning
- timestamps
- useNestedStrict

---------------------------------------------------------

### 以下是 mongoose 的所有合法 SchemaTypes：

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128

##### 全部可用

- required: 布尔值或函数 如果值为真，为此属性添加 required 验证器
- default: 任何值或函数 设置此路径默认值。如果是函数，函数返回值为默认值
- select: 布尔值 指定 query 的默认 projections
- validate: 函数 adds a validator function for this property
- get: 函数 使用 Object.defineProperty() 定义自定义 getter
- set: 函数 使用 Object.defineProperty() 定义自定义 setter
- alias: 字符串 仅mongoose >= 4.10.0。 为该字段路径定义虚拟值 gets/sets

##### 你可以使用 schema type 选项定义MongoDB indexes。

- index: 布尔值 是否对这个属性创建索引
- unique: 布尔值 是否对这个属性创建唯一索引
- sparse: 布尔值 是否对这个属性创建稀疏索引

##### String

- lowercase: 布尔值 是否在保存前对此值调用 .toLowerCase()
- uppercase: 布尔值 是否在保存前对此值调用 .toUpperCase()
- trim: 布尔值 是否在保存前对此值调用 .trim()
- match: 正则表达式 创建验证器检查这个值是否匹配给定正则表达式
- enum: 数组 创建验证器检查这个值是否包含于给定数组

##### Number

-min: 数值 创建验证器检查属性是否大于或等于该值
-max: 数值 创建验证器检查属性是否小于或等于该值

##### Date

- min: Date
- max: Date
