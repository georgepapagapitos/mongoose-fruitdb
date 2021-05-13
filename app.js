require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

// FOR REFERENCE:

// const kiwi = new Fruit({
//   name: 'Kiwi',
//   rating: 9,
//   review: 'Very tasty fruit'
// });

// const orange = new Fruit({
//   name: 'Orange',
//   rating: 3,
//   review: "Inconsistent"
// });

// const banana = new Fruit({
//   name: 'Banana',
//   rating: 7,
//   review: 'Not the best texture'
// });

// const apple = new Fruit({
//   name: 'Apple',
//   rating: 8,
//   review: 'Crispy apples are the best'
// });

// Fruit.insertMany([kiwi, orange, banana, apple], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully saved the fruits to the db');
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err)
  } else {
    mongoose.connection.close();
    fruits.forEach(fruit => console.log(fruit.name));
  }
});

// EXAMPLE FOR REFERENCE:

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// const person = new Person({
//   name: "George",
//   age: 31
// });

// person.save();

// Person.find(function (error, result) {
//   if (error) {
//     throw new Error('error searching db');
//   } else {
//     console.log(result);
//   }
//   mongoose.connection.close();
// });