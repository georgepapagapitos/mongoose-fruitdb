require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Fruit name is required!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

/****** These will fail because of the validation above ******/

const pineapple = new Fruit({
  name: 'Pineapple',
  rating: 34,
  review: 'GOAT'
});

const peach = new Fruit({
  rating: 8,
  review: 'Peaches are the best!'
})

// pineapple.save();
// peach.save();

/**************************************************************/

/** UPDATE THE DB **/
// Fruit.updateOne({ _id: "609d58f1f940510020987e97" }, { rating: 5 }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully updated the document');
//   }
// });

/** DELETE A DB ENTRY **/
// Fruit.deleteOne({ _id: "609d58f1f940510020987e98" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`successfully deleted item from db`);
//   }
// });

/** CREATE FRUITS TO ADD TO DB**/
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

/** INSERT FRUITS INTO DB **/
// Fruit.insertMany([kiwi, orange, banana, apple], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully saved the fruits to the db');
//   }
// });

/** FETCH ALL FRUITS FROM DB AND LOG THEIR NAME **/
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err)
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(fruit => console.log(fruit.name));
//   }
// });


/** CREATE A PERSON MODEL AND ADD TO PERSON COLLECTION **/
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