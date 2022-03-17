// bitwise &: Sets each bit to 1 if both bits are 1
let x = 5 & 1;
console.log(x);

// bitwise OR: Sets each bit to 1 if one of two bits is 1
let y = 5 | 1;
console.log(y);
// bitwise XOR: Sets each bit to 1 if only one of two bits is 1
let z = 5 ^ 1;
console.log(z);

// RegExp text search
let text = "Hi World"; // will print 3 because its the 3rd space
let a = text.search("World");
console.log(a);

// RegExp text replace
let text2 = "Hello World! Welcome to the best programming language, Python!"
let b = text2.replace("Python", "JavaScript");
console.log(b);

// try/catch/throw/finally errors
function myFunction() {
    const message = document.getElementById("demo1");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw ": is empty";
      if(isNaN(x)) throw ": is not a number";
      if (x = Number(x)) throw ": Good Job! Number was between 10 & 25.";
      if(x > 25)   throw ": is too high";
      if(x < 10)  throw ": is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
}

  // "this" keyword
  const person = {
      firstName : "Spencer",
      lastName : "Merrill",
      age : 25,
      fullName : function() {
          return "My full name is " + this.firstName + " " + this.lastName
          + ", and I am " + this.age;
      }
  };
  document.getElementById("name").innerHTML = person.fullName();

  // arrow function 
  let arrowFunction = (a, b) => a + b;
  document.getElementById("number").innerHTML = "7 + 7 = " + arrowFunction(7, 7);

  // form validation
  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  // OOP object
  class Dog { // class of what we want our object to be like
    constructor(breed, color, height, weight ) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
      }
      shake() { // methods or behaviors the dog will have
        return "the dog shook your hand";
      }
      sit() {
        return "the dog sat";
      }
      laydown() {
        return "the dog laid down";
      }
  }
  let myDog = new Dog("Goldendoodle", "Black", "30 inches", "35lbs") // object of dog
  document.getElementById("dog").innerHTML = `The dog is a  ${myDog.color } ${myDog.breed}
  that is ${myDog.height} tall, and weighs ${myDog.weight}.`;
  document.getElementById("behavior").innerHTML = myDog.shake();

  // Shape classes

  // this is our base class
  class Shape {
    constructor(color) { 
      this.color = color;// property
    }
    getArea(){ // method inside our class

    }
  }
  class Rectangle extends Shape { // new class inheriting from base class and adding own properties
    constructor(color, height, width) {
      super(color)
      this.height = height;
      this.width = width;
     }
     getArea() {
       return this.height * this.width;
     }
  }
  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color)
      this.base = base;
      this.height = height;
    }
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  class Circle extends Shape {
    constructor(color, radius) {
      super(color)
      this.radius = radius;
    }
    getArea() {
      return Math. PI * this. radius * this. radius;
    }
  }