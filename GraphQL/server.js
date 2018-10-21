const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    ip: String
  }
`);

function loggingMiddleware(request, response, next) {
  console.log('ip:', request.ip);
  next();
}

const root = {
  ip: (args, request) => request.ip
};

const app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');


// const query = `
//   query {
//     ip
//   }
// `;
//
// fetch('/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     query
//   }),
// })
//   .then(r => r.json())
//   .then(data => console.log(data));
