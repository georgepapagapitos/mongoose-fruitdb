const mongoose = require('mongoose');

const uri = "mongodb+srv://user:howdy@cluster0.vqhpz.mongodb.net/fruitsDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'Kiwi',
  rating: 9,
  review: 'Very tasty fruit'
});

fruit.save();

Fruit.find(function (error, result) {
  if (error) {
    throw new Error('error searching db');
  } else {
    for (fruit of result) {
      console.log(fruit.name)
    }
  }
  mongoose.connection.close();
});


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "George",
  age: 31
});

person.save();

Person.find(function (error, result) {
  if (error) {
    throw new Error('error searching db');
  } else {
    console.log(result);
  }
  mongoose.connection.close();
});