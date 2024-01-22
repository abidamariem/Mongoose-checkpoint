// Import Mongoose
const mongoose = require('mongoose');

// Define the schema for a Person
const personSchema = new mongoose.Schema({
 name: {
    type: String,
    // required: true
 },
 age: Number,
 favoriteFoods: [String]
});

// Create a model based on the Person schema
const Person = mongoose.model('Person', personSchema);

// Export the Person model
module.exports = Person;
