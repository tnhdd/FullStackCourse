const jsonString = '{"name": "Alice", "age":25, "isStudent":false}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);
console.log(jsonObject.age);
