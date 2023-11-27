import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/Schema';
import resolvers from './data/resolver';

const app = express();

app.get("/", (req, res)=>{
    res.send("GraphQl is amazing");
});

const root = resolvers;

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, ()=> console.log("Listening to localhost:8080/graphql"))