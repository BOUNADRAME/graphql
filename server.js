const express = require("express");
const { graphqlHTTP } = require('express-graphql')
const userSchema = require("./schemas/schema");
const server = express();

server.use("/grahiql", graphqlHTTP({
    graphiql: true,
    schema: userSchema
}))

server.listen(4000, () => {
    console.log("Le serveur est en écoute sur le port 4000");
})