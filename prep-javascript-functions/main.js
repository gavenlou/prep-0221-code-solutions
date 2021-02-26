function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('addTwoNumbers:', addTwoNumbersResult);

function convertHoursToMinutes(number) {
  return number * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes:', convertHoursToMinutesResult);

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}

var personalizeGreetingResults = personalizeGreeting('Tim');
console.log('personalizeGreeting:', personalizeGreetingResults);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(2, 10);
console.log('addAndMultiplyBy5:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 + num2) / 5;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(2, 10);
console.log('multiplyAndDivideBy5:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(10, 2);
console.log('subtractTwoNumbers:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}

var getCircleCircumferenceResults = getCircleCircumference(4);
console.log('getCircleCircumference:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResults = getFullName('Gaven', 'Loughridge');
console.log('getFullName:', getFullNameResults);

function cube(number) {
  return number ** 3;
}

var cubeResults = cube(4);
console.log('cubeResults:', cubeResults);
