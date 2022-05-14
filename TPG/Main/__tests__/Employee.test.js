const Employee = require("../lib/Employee");
const employee = Employee('John', '123', 'John1@gmail.com');

test("Test if we get constructor values for employee", () => {
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('John1@gmail.com');
});

test("Test get name", () => {
  expect(employee.getName()).toBe('John');
});

test("Test gte Id", () => {
    expect(employee.getId()).toBe('1234');
});

test("Test get email", () => {
  expect(employee.getemail()).toBe('John1@gmail.com'); 
});


test("Test get role", () => {
  expect(employee.getRole()).toBe('Employee'); 
  
});
