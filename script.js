class Person {
	constructor(name, age) {
		this.n = name;
		this.a = age;
	}
	greet() {
		console.log(`Hello, my name is ${this.n} and I am ${this.a} years old.`);
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
        this.j = jobTitle;
	}
	jobGreet() {
		console.log(`Hello, my name is ${this.n}, I am ${this.a} years old, and my job title is ${this.j}.`);
	}
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;