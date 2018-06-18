import mongoose from 'mongoose';
import {dbConfig} from '../../Config/settings';
import {personsSchema} from './Persons/bdSchema';


mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.url);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
  console.log('connected to database')
});

const Persons = mongoose.model('persons', personsSchema);

export {Persons}
