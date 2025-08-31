
let age = 16; // example variable

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are still young.");
}

// Function 1: add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: greet a user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Use both functions
console.log(addNumbers(3, 4));     // 7
console.log(greetUser("Ryan"));    // "Hello, Ryan!"


// Example 1: for loop
for (let i = 1; i <= 3; i++) {
  console.log("Number: " + i);
}

// Example 2: loop through an array
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 1. Change text
document.getElementById("welcome-text").textContent = "Welcome to JavaScript!";

// 2. Toggle visibility on button click
document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// 3. Add list items dynamically
let fruitList = document.getElementById("fruit-list");
fruits.forEach(function(fruit) {
  let li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});
