import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from '../Schema/schema';

var router = express.Router();

//var graphqlHTTP = require('express-graphql');

router.use('/',  graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

export default router ;
