var person = {
  firstName: 'Gaven',
  lastName: 'Loughridge',
  hobby: 'Reading'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The person\'s full name is:', fullName + '.');

person.job = 'Student/Part Time';

console.log('The person\'s current job is:', person.job + '.');

person.previousJob = 'Student';

console.log('The person\'s previous job was:', person.previousJob + '.');

console.log(person);

var myCar = {
  make: 'Oldsmobile',
  model: 'Cutlass Supreme',
  year: '1995'
};

console.log(myCar);

myCar['owner'] = fullName;

console.log('Owner: ' + myCar['owner'] + ' Make: ' + myCar['make'] + ' Model: ' + myCar['model'] +
' Year: ' + myCar['year']);

myCar['color'] = 'Gold';

console.log(myCar);
