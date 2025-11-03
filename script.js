// 1️⃣ Create a student object
const student = {
  name: "Radha",
  age: 20,
  marks: 88,
  city: "Ahmedabad",

  // 2️⃣ Add a method to print a greeting
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

// 3️⃣ Print all keys and values using for...in
console.log("📋 Student Details:");


for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// Call the greeting method
student.greet();

// 4️⃣ Create an array of students
const students = [
  { name: "Radha", marks: 88 }, 
  { name: "Ravi", marks: 75 },
  { name: "Mira", marks: 92 },
  { name: "Jay", marks: 60 },
  { name: "Neha", marks: 85 }
];

// 5️⃣ Function to print names of students with marks > 80
function printTopStudents(studentArray) {
  console.log("\n🎓 Students with marks above 80:");
  studentArray.forEach(stu => {
    if (stu.marks > 80) {
      console.log(stu.name);
    }
  });
}

printTopStudents(students);

// 6️⃣ Create a car object and update its color dynamically
let car = {
  model: "Toyota Corolla",
  year: 2022,
  color: "White"
};

console.log("\n🚗 Before update:", car);

// Update color dynamically
car.color = "Black";

console.log("🚘 After update:", car);


// 7️⃣ Function to count how many properties an object has
function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(`\n📦 Number of properties in student object: ${countProperties(student)}`);
console.log(`📦 Number of properties in car object: ${countProperties(car)}`);
