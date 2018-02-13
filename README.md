# ES2015+ features
Just a collection of useful features that I tend to use on a daily basis. Hopefully this is useful
for those who are learning Javascript or exploring some of the many new features of the ES2015+ (aka ES6)
standard. Keep in mind, that I'm using the AirBnB style guide for my examples and as such, there are
many other ways to go about doing what I'll be showing.

## Javascript
Example code that goes along with the following descriptions can be found the es6 directory.

#### Variable Declarations
`const` and `let` are used in ES6 and are different from `var` because they are only block scope.
This means that they are only hoisted to the top of the scope block in which they are declared.
While at first glance, `const` and `let` may seem similar but the similarities they share end at
them both being variable declarations. `const` is a declaration that many would call constant. This
is a bit of a misnomer, because `const` doesn't necessarily mean that it is constant. `const` in
Javascript means it can't be reassigned. A `const` variable is still mutable so objects or arrays
can be changed. Primitives such as numbers though can't be modified. `let` functions much like `var`
but it is again, scope blocked like `const`.

#### Arrow Functions
Arrow functions are useful to clean up code when using callback functions. They're also useful since
they're a couple less keystrokes than using the `function` keyword. Another important feature
of arrow functions is that they bind the context in which they are executed. This means that you
can use in place of a bind in certain situations like in a React component's onClick method or
similar. (See line 34 of `App.jsx` for an example in practice) Arrow functions also are different
from `function` declarations in that they do not have access to the `arguments` object. Instead,
when using arrow functions, you must use the rest (`...`) operator to allow access to all input
parameters.

#### Destructuring
Destructuring objects and arrays is a technique that makes it more convenient to access the
necessary properties for a function and assigning them to the same variable name. It can be used in
function parameters or within a function.

```javascript
const example = ({ key1, key2, key4 }) => {
  console.log(`Here are some values ${key1} ${key2} ${key4}`);
};

const example2 = (object) => {
  const { key1, key4 } = object;
  console.log(`Here are some values ${key1} ${key2}`);
};
```
Another feature of destructuring is also being able to rename the key to a new variable name if the
key's name isn't adequate for your use case. To do that, you'll assign the value the label which you will
use in your code instead of destructuring with the same name.

```javascript
const example3 = (object) => {
  const { key1: name, key2: age } = object;
  console.log(`Object's name is ${name} and is ${age} years old.`);
};
```

#### Classes
Classes introduced in ES6 are syntactical sugar for prototypal inheritance. This makes it more akin
to classes in other languages. The way that classes inherit from their parent class is by a method
called `extends`. In addition, the `super` keyword must also be called in the constructor else the
parent's functions will never be accessed. It is how those methods are called from the parent
class.

Its important to note that `class` declarations are not hoisted like a `function` declaration such
as a pseudoclassical constructor.

#### Template Literals
Template literals are used in place of string concatenation. At first, they may seem like more
keystrokes to implement but it makes string concatenation clearer and easier to read. It uses
a backtick (located under the tilde on most keyboards) and is not to be confused with a single
quote.

```javascript
const screename = 'andino93'
const string = screename + ' ' + 'made' + ' ' + 'this' + ' ' + 'readme.'
const template = `${screename} made this readme`
```

#### Rest and Spread Operators
###### Spread Operator
The spread operator enables the extraction of items in an iterable item to be access as single
elements. It can be used on Arrays, Objects and even Strings.

###### Rest Operator
The rest operator is similar to a spread operator but it is used in function parameters. It allows
the binding of multiple arguments into a single variable name which can be accessed as an array.

#### Asynchronous Code
###### Promises
###### async/await

## React Client
The React folder has a client that an example of a real-world use of object destructuring and arrow
function binding. Follow the setup instructions to see how it works or just take a look at the code
in the React directory.

#### Setup
To get the sample React App running on your local machine, just follow the steps following.

- `npm install` to get things all dependencies installed
- `npm run start:dev` to start express server
- Navigate to `http://localhost:3000` to try example site
