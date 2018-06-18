import express from 'express';
import graphqlHTTP from 'express-graphql';
import route from './App/Routes/index';

const app = express();

app.set('port', process.env.PORT || 3000);

//app.use(express.static('App/Public'));

app.use(route);

app.listen(app.get('port'), ()=>{
  console.log('listening on port : '+app.get('port'));
});
