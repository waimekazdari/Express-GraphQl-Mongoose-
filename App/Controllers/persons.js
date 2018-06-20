import personsQueries from '../Models/Persons/queries'
//import mongoose from 'mongoose';
//import { Persons } from '../Models/dbConnector';

//getOnePersons

export const resolvers = {
    Query: {
      getOnePerson: personsQueries.getOnePerson
  },
    Mutation: {
      createPerson: personsQueries.createPerson,
      updatePerson: personsQueries.updatePerson,
      deletePerson: personsQueries.deletePerson
        }
}
