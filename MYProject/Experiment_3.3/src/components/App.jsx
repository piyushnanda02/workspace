import React from 'react';

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass extends Person
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getInfo() {
    return `${super.getInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass extends Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }
}

function App() {
  // Create instances using the subclasses
  const student = new Student('Raj', 20, 'Computer Science');
  const teacher = new Teacher('Priya', 35, 'Mathematics');

  return (
    <div>
      <h2>Person Class Hierarchy Demo</h2>
      <p><strong>Student:</strong> {student.getInfo()}</p>
      <p><strong>Teacher:</strong> {teacher.getInfo()}</p>
    </div>
  );
}

export default App;
