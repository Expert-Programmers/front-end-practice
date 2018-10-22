## graphql

`graphql` 模块导出了 GraphQL 的一个核心子集,其主要功能是创建 GraphQL 的类型系统和服务.

```javascript
import { graphql } from 'graphql';
const { graphql } = require('graphql');
```

### Overview

#### 入口点

```
function graphql
根据 schema 对一个 GraphQL 请求进行词法分析、解析、验证及执行.
```

```typescript
graphql(
  schema: GraphQLSchema,
  requestString: string,
  rootValue?: ?any,
  contextValue?: ?any,
  variableValues?: ?{[key: string]: any},
  operationName?: ?string
): Promise<GraphQLResult>
```

`graphql` 方法可以对一个 `GraphQL` 请求进行词法分析、解析、验证和执行.必要的参数是 `schema` 和 `requestString`,可选的参数则包括 `rootValue`
(将作为根值传入执行器方法)、`contextValue`(将传入所有的解析函数)、`variableValues`(将传入执行器方法,为 `requestString` 中的任意类型变量赋值)
以及 `operationName`(在 `requestString` 包含多个顶级操作的情况下,这个参数允许调用函数指定 `requestString` 运行哪个操作).

#### Schema

```
class GraphQLSchema
一个 GraphQL 服务的功能配置描述 
```

#### 类型定义

```
class GraphQLScalarType
GraphQL 里的标量类型.

class GraphQLObjectType
GraphQL 里的自定义对象类型,包含一个 fields 字段.

class GraphQLInterfaceType
GraphQL 里的接口类型,定义多个类型中通用的字段.

class GraphQLUnionType
GraphQL 里的联合类型,定义了(某个字段能支持的所有返回类型的)一个实现列表.

class GraphQLEnumType
GraphQL 里的枚举类型,定义了一个有效(可枚举)数据类型的列表.

class GraphQLInputObjectType
GraphQL 里的输入对象类型,表示一些结构化的输入.

class GraphQLList
这是对其他类型进行封装的类型,表示一个包含那些类型的列表.

class GraphQLNonNull
这也是对其他类型进行封装的类型,并强制要求类型值不能为空.
```

#### 标量类型

```
var GraphQLInt
表示整数的标量类型.

var GraphQLFloat
表示浮点数的标量类型.

var GraphQLString
表示字符串的标量类型.

var GraphQLBoolean
表示布尔值的标量类型.

var GraphQLID
表示 ID 值的标量类型.
```

#### 错误信息

```
function formatError
根据返回格式描述的规则格式化一个错误. 
```
