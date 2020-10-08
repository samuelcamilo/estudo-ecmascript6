var person = {
    name: "Samuel Camilo",
    age: 24,
    isValid: true,
    projects: [
        {
            description: "QAcademic",
            resume: "this..."
        }
    ]
}

var square = {
    sides: 4,
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return this.sides * side;
    }
}

// show...
console.log("Name: ", person.name);
console.log("Age: ", person.age);
console.log("IsValid?: ", person.isValid);
console.log("Projects: ", person.projects);

console.log("Square: ", square.area(5));
console.log("Perimeter: ", square.perimeter(5));