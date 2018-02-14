const printFirstAndSecondElement = ([first, second]) => {
  console.log(`First element is ${first}, second is ${second}`);
};

const printSecondAndFourthElement = ([, second, , fourth]) => {
  console.log(`Second element is ${second}, fourth is ${fourth}`);
};

const array = [1, 2, 3, 4, 5];

printFirstAndSecondElement(array);
printSecondAndFourthElement(array);

const printBasicInfo = ({ firstName, lastName, profession }) => {
  console.log(`${firstName} ${lastName} - ${profession}`);
};

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher',
};

printBasicInfo(person);

const printAgeAndProfession = (adult) => {
  const { age, profession } = adult;
  console.log(`This person is ${age} years old and in this ${profession}`);
};

printAgeAndProfession(person);

const printFirstAndLastElement = (arr) => {
  const [first, , , , last] = arr;

  console.log(`First element is ${first} and the last element is ${last}`);
};

printFirstAndLastElement(array);

const [hello, there] = [1, 2];
console.log(hello, there);
