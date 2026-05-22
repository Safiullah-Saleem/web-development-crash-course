// string
let name="Emaan Fatima";
document.write(typeof name);
console.log(name);
document.write("<br>");
document.write(name);
// String methods
// .length, .toUpperCase(), .toLowerCase(), .slice(), .replace(), .includes()
document.write("<br>");
document.write(name.length);
document.write("<br>");
document.write(name.toUpperCase());
document.write("<br>");
document.write(name.toLowerCase());
document.write("<br>");
document.write(name.slice(0,6))
document.write("<br>");
document.write(name.replace("Emaan","Eman"));
document.write("<br>");
document.write(name.indexOf("a"));
let height=21.5;
document.write("<br>");
document.write(height);
document.write("<br>");
document.write(typeof height);
// Boolean (true/false)
let marks=45>50;
document.write("<br>");
document.write(marks);
document.write("<br>");
document.write(typeof marks);
// undefined
let city;
console.log(city);
// Null
let car=null;
console.log(car);
console.log(typeof car);
// objects
let student={
    name:"Emaan",
    age:20, 
    grade:"A"}
document.write("<br>");
document.write(student);
document.write("<br>");
document.write(typeof student);
document.write("<br>");
document.write(student.name);
document.write("<br>");
// document.write(student["name"]);
// Arrays
let fruits=["apple","banana","orange"];
document.write("<br>");
document.write(fruits);
document.write("<br>");
document.write(typeof fruits);
function greet(){
    console.log("Hello World");
}
greet();

// Arrays,Functions,objects,null are all of type object in JavaScript
