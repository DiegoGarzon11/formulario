const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./root');
const metodo = graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
module.exports = metodo;
