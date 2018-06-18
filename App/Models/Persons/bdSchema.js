import mongoose from 'mongoose';
var Schema = mongoose.Schema;

export const personsSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    language: String,
    email:String,
    contacts: Array
});
