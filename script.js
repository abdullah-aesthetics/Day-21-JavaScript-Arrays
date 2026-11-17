// ==================================================
// Student Dataset - Arrays & Core Array Methods
// Day 21 - JavaScript Arrays
// ==================================================


// ---------- 1. CREATE THE ARRAY ----------
// An array stores many values in one variable.
// Each student is a record (an object with name, marks and semester).
const students = [
    { name: "Ayesha", marks: 88, semester: 3 },
    { name: "Bilal", marks: 65, semester: 5 },
    { name: "Sara", marks: 92, semester: 3 },
    { name: "Usman", marks: 54, semester: 1 },
    { name: "Hina", marks: 76, semester: 5 },
    { name: "Daniyal", marks: 70, semester: 1 }
];

console.log("===== 1. The Student Array =====");
console.table(students);


// ---------- 2. ACCESSING ARRAY ELEMENTS ----------
// Index numbers start at 0, so the first student is students[0]
console.log("===== 2. Accessing Elements =====");
console.log("Number of students (length):", students.length);
console.log("First student (index 0):", students[0]);
console.log("Third student's name (index 2):", students[2].name);
console.log("Last student:", students[students.length - 1].name);   // last index = length - 1


// ---------- 3. forEach() - DO SOMETHING WITH EVERY ITEM ----------
// forEach runs the function once for every student. It does not return anything.
console.log("===== 3. forEach() - All Student Names =====");
students.forEach((student, index) => {
    console.log((index + 1) + ". " + student.name);
});


// ---------- 4. filter() - KEEP ONLY THE MATCHING ITEMS ----------
// This small function answers "is this student above 70?" with true or false.
// It is written once and reused in filter() and find()
const isAbove70 = (student) => student.marks > 70;

// filter returns a NEW array with only the students for whom the function gave true
const topStudents = students.filter(isAbove70);

console.log("===== 4. filter() - Students Above 70 Marks =====");
console.log("How many:", topStudents.length);
topStudents.forEach((student) => {
    console.log(student.name + " - " + student.marks);
});
// Daniyal has exactly 70, which is not above 70, so he is not included


// ---------- 5. map() - TRANSFORM EVERY ITEM INTO A NEW ARRAY ----------
// map returns a new array with one result for each student. The original is not changed.
const studentNames = students.map((student) => student.name);
const studentSummaries = students.map((student) => student.name + " scored " + student.marks + " marks");

console.log("===== 5. map() - New Arrays =====");
console.log("Only the names:", studentNames);
console.log("Summaries:", studentSummaries);


// ---------- 6. find() - SEARCH FOR THE FIRST MATCH ----------
// find returns the first student for whom the function gives true, or undefined if there is none
const firstTopStudent = students.find(isAbove70);
const studentNamedHina = students.find((student) => student.name === "Hina");
const studentNamedAhmed = students.find((student) => student.name === "Ahmed");

console.log("===== 6. find() - Searching =====");
console.log("First student above 70:", firstTopStudent);
console.log("Student named Hina:", studentNamedHina);

// Always check the result: find gives undefined when nobody matches
if (studentNamedAhmed) {
    console.log("Student named Ahmed:", studentNamedAhmed);
} else {
    console.log("No student named Ahmed was found.");
}


// ---------- 7. ADD, ACCESS AND UPDATE ELEMENTS ----------
console.log("===== 7. Add, Access and Update =====");

// Add: push puts a new student at the end of the array
students.push({ name: "Zainab", marks: 81, semester: 3 });
console.log("After push, number of students:", students.length);
console.log("Newly added student:", students[students.length - 1]);

// Update: change a value using its index (Bilal is at index 1)
console.log("Bilal's marks before:", students[1].marks);
students[1].marks = 72;
console.log("Bilal's marks after:", students[1].marks);

// The methods use the updated array automatically, with no repeated code
console.log("Students above 70 now:", students.filter(isAbove70).map((student) => student.name));

console.log("Final student list:");
console.table(students);
