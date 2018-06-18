import { resolvers } from '../Controllers/persons';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
      type Person {
          id: ID
          firstName: String
          lastName: String
          gender: Gender
          age: Int
          language: String
          email: String
          contacts: [Contact]
      }

      type Contact {
        firstName: String
        lastName: String
      }

      enum Gender {
          MALE
          FEMALE
          OTHER
    }

      type Query {
          getOnePerson(id: ID!): Person
      }

      input PersonInput {
          id: ID
          firstName: String!
          lastName: String
          gender: Gender
          age: Int
          language: String
          email: String
          contacts: [ContactInput]
  }

      input ContactInput {
          firstName: String
          lastName: String
      }

      type Mutation {
          createPerson(input: PersonInput): Person
      }

`;

//updateFriend(input: FriendInput): Friend
//deleteFriend(id: ID!): String

const schema = makeExecutableSchema({ typeDefs, resolvers});

export { schema };
