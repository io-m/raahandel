const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const rootSchema = require('./schema');

const users = require('./users');

const app = express();

app.use(express.json());

// This is dummy storage for mutations
const newUsers = [];


app.use("/graphql", graphqlHTTP({
    schema: buildSchema(
        rootSchema
    ),
    rootValue: {
        users: () => {
            return users;
        }
    },
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});



// TwloljPwQeOBTzvc
