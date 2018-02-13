/* eslint eact/react-in-jsx-scope: off, react/jsx-filename-extension: off, func-names: off,
prefer-arrow-callback: off, no-unused-vars: off */

const nums = [1, 2, 3, 4];
const sumOfArrayElements = nums.reduce((acc, value) => acc + value, 0);
const productOfArrayElements = nums.reduce((acc, value) => acc * value, 1);

const sum = (acc, value) => acc + value;
const product = (acc, value) => acc * value;

const exampleFunc = function (array) {
  const string = array.map(function (item) {
    return `${item} in array`;
  });
  return string.join(' ');
};

const example = (array) => {
  const string = array.map(item => `${item} in array`);
  return string.join(' ');
};

/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
const example2 = () => ( // uses implicite return of arrow functions
  <div> something something </div>
);
/* eslint-enable react/react-in-jsx-scope, react/jsx-filename-extension */

const bound = example.bind(null, [1, 2, 3]);
const arrowBind = () => example([1, 2, 3]);
