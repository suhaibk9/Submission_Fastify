const Submission = require('../models/submissionModel');
class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }
  async addSubmission(submission) {
    const newSubmission = await this.submissionModel.create(submission);
    return newSubmission;
  }
  async updateStatus(submissionId, status) {
    const updatedSubmission = await this.submissionModel.findByIdAndUpdate(
      submissionId,
      { status },
      { new: true }
    );
    return updatedSubmission;
  }
}

module.exports = SubmissionRepository;

/**
S-> Single Responsibility Principle
example:
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    salaryCalculator() {
    return `${this.name} has a salary of $1000`;
    }
  getEmployeeDetails() {
    return `${this.name} is ${this.age} years old`;
  }
  saveEmployee() {
    return `${this.name} has been saved`;
  }

}
const employee = new Employee('John Doe', 30);
console.log(employee.getEmployeeDetails());
console.log(employee.saveEmployee());

Here the Employee class too many responsibilities. It is responsible for calculating the salary, getting employee details, and saving the employee.
This makes it prone to constant changes. If we need to change the way the salary is calculated, we would have to change the salaryCalculator method.

Refactor the code to adhere to the Single Responsibility Principle:

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getEmployeeDetails() {
    return `${this.name} is ${this.age} years old`;
  }
}
class Salary {
  constructor(name) {
    this.name = name;
  }
  salaryCalculator() {
    return `${this.name} has a salary of $1000`;
  }
}
Now the Employee class is only responsible for getting employee details, while the Salary class is responsible for calculating the salary.
Now if way to calculate salry changes, we only need to change the Salary class no need to change the Employee class.

O -> Open/Closed Principle

Any piece of code should be open for extension but closed for modification.

Class Shape{
  constructor(shape){
    this.shape = shape;
  }
  draw(){
    if(this.shape === 'circle'){
      return 'circle is drawn';
    }
    if(this.shape === 'square'){
      return 'square is drawn';
    }
    if(this.shape === 'rectangle'){
      return 'rectangle is drawn';
    }
  }
}

Now if we need to add a new shape, we would have to modify the Shape class. This violates the Open/Closed Principle. As for every new shape, we would have to modify the Shape class.

Refactor the code to adhere to the Open/Closed Principle:

class Shape {
  constructor() {
    this.shape = 'shape';
  }
  draw() {
    return `${this.shape} is drawn`;
  }
}
class Circle extends Shape {
  constructor() {
    super();
    this.shape = 'circle';
  }
}
class Square extends Shape {
  constructor() {
    super();
    this.shape = 'square';
  }
}
const circle = new Circle();
const square = new Square();
console.log(circle.draw());
console.log(square.draw());

Here the Shape class is open for extension but closed for modification. We can create new shapes by extending the Shape class without modifying the Shape class.
Even inheritance has it's own problems. Say there is a Car class now you inherit and create 3 new classes like Sedan, SUV, Hatchback. 
SUV has - Feature 1 , Feature 2
Sedan has - Feature 1 , Feature 3
Hatchback has - Feature 2 , Feature 3
Now you will have to keep repeating Feature 1, Feature 2, Feature 3 in all the classes.
So to avoid this we can use Composition over Inheritance. It is the best way to avoid the problems of inheritance.
Like in TS
interface FeatureProcessor{
  processFeature(): void;
}
class Feature1 implements FeatureProcessor{
  processFeature(){
    console.log('Feature 1');
  }
}
class Feature2 implements FeatureProcessor{
  processFeature(){
    console.log('Feature 2');
  }
}
class Feature3 implements FeatureProcessor{
  processFeature(){
    console.log('Feature 3');
  }
}
Now in your Car class you can have a list of FeatureProcessor and you can add the features you want to add to the car.
class Car{
  features: FeatureProcessor:{ }
  addFeature(feature: FeatureProcessor){
    this.features.push(feature);
  }
  processFeatures(){
    this.features.forEach(feature => feature.processFeature());
  }
}
*/
