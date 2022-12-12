const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB');

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name : "Apple",
    rating : 3,
    review: 'this is best Fruit'
});

const orange = new Fruit({
    name  : "orange",
    rating  : 4,
    review : "this is good fruit"
});

const banana = new Fruit({
    name : "banana",
    rating  : 5,
    review : "this is banana"
});

Fruit.insertMany([apple, orange, banana], function(err){
    if(err) { 
        console.log(err);
    }
    else{
        console.log("Succefully inserted!");
    }
});

Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(fruits);
    }
});