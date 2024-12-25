function greeter(person: string): string {
  return "Hello, " + person + "!";
}

function isString(input: any): input is string {
  return typeof input === 'string';
}

let user = ["Jane", "Doe"];
let userName = "Jane Doe";

if (isString(userName)) {
  console.log(greeter(userName)); //Correct usage
} else {
  console.log("Incorrect input type");
}

if (isString(user)){
  console.log(greeter(user));
} else {
  console.log("Incorrect input type"); //This will execute
}
//More robust solution using a function to handle arrays properly
function greetMultiple(names: string[]): string {
    return "Hello, " + names.join(", ") + "!";
}
console.log(greetMultiple(user)); //Correct handling of an array