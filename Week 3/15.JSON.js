/* Around 2001, Douglas Crockford came up with a data interchange format based on JavaScript objects. The name given to this format was JSON, which is JavaScript Object Notation.

It's all about getting stringified JSON data from a server, converting ("parsing") that data into JS objects in your own code, working with the converted data in your own code, 
and perhaps even stringifying the result into JSON, so that this data is then ready to, for example, be sent back to a server after your code has processed it locally.

JSON is just a string - but there are rules that it must follow
JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

JSON can work with some primitives and some complex data types, as described below.

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

primitive values: strings, numbers, bolleans, null

complex values: objects and arrays (no functions!)

Objects have double-quoted strings for all keys

Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

String properties must be surrounded in double quotes.

*/


var result = {
    value: 7
  };
  console.log(JSON.stringify(result));
  
  