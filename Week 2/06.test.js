
var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');

console.log(clothes)


var food = [];
food.push('Chocolate');
food.push('Ice cream');
food.push('Donut');

console.log(food[1])


var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";


var result = null;
console.log(result);


try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

  
  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }

  var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
  console.log(burger[2]);

  
  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

var str = "Hello";
str.match("jello");

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }