// Task 1: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

// array of objects
const people = [
  { name: "Mazhar", age: 24, gender: "male" },
  { name: "Habiba", age: 18, gender: "female" },
  { name: "Emon", age: 22, gender: "male" },
  { name: "Abul Basar", age: 26, gender: "male" },
  { name: "Tumpa", age: 24, gender: "female" },
  { name: "Nayon", age: 27, gender: "male" },
];

// Function to filter out all females and then map the remaining people to an array of names
const getMaleNames = (people) => {
  const males = people.filter((person) => person.gender === "male");
  const maleNames = males.map((person) => person.name);
  return maleNames;
};

console.log(getMaleNames(people));

// Task 2: Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

// Function to get an array of book titles
const getBookTitles = (books) => {
  const titles = books.map((book) => book.title);
  return titles;
};

console.log(getBookTitles(books));

// Task 3: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2010 },
  { make: "Honda", model: "Accord", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Malibu", year: 2012 },
  { make: "Tesla", model: "Model S", year: 2020 },
];

//   Function To Sort The Array Of Cars
const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));

// Task 4: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people2 = [
  { name: "Monir", age: 30, gender: "male" },
  { name: "Rukaya", age: 25, gender: "female" },
  { name: "Humaira", age: 28, gender: "female" },
  { name: "Momin", age: 35, gender: "male" },
  { name: "Jayed", age: 40, gender: "male" },
  { name: "Mohosina", age: 22, gender: "female" },
];

const findAndModifyAge = (people2, personName, newAge) => {
  const person = people2.find((p) => p.name === personName);

  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person with name ${personName} not found.`);
  }
  return people;
};

const updatedPeople = findAndModifyAge(people, "Sakib", 36);

// Print the updated array
console.log(updatedPeople);
