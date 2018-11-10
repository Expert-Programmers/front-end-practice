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
