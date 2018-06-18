import mongoose from 'mongoose';
import { Persons } from '../dbConnector';

const queries = {
      getOnePerson: (root, { id })=>{
        return new Promise((resolve, object) => {
            Persons.findById(id, (err, person)=>{
                if(err) reject(err)
                else resolve(person)
            });
        });
    },
      createPerson: (root, { input }) => {
              const newPerson = new Persons({
                  firstName: input.firstName,
                  lastName: input.lastName,
                  gender: input.gender,
                  age: input.age,
                  language: input.language,
                  email: input.email,
                  contacts: input.contacts
              });

              newPerson.id = newPerson._id;

              return new Promise((resolve, object) => {
                  newPerson.save((err) => {
                      if (err) reject(err)
                      else resolve(newPerson)
                  })
              })
          },
};

export default queries;
