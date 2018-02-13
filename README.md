# ES2015+ features
Just a collection of useful features that I tend to use on a daily basis. Hopefully this is useful
for those who are learning javascript or just exploring some of the many new features of the ES2015+
standard. Keep in mind, that I'm using the AirBnb style guide for my examples and as such, there are
many other ways to go about doing what I'll be showing.

## Javascript
Example code that goes along with the following descriptions can be found the es6 directory.

#### Variable Declarations
`const` and `let` are used in ES6 and are different from `var` because they are only block scope.
This means that they are only hoisted to the top of the scope block in which they are declared.
While at first glance, `const` and `let` may seem similar but the similarities they share end at
them both being variable declarations. `const` is a declaration that many would call constant. This
is a bit of a misnomer, in my opinion because `const` doesn't necessarily mean that its constant.
`const` in Javascript just means it can't be reassigned. This means that it is still mutable so
objects or arrays can be changed. Primitives such as numbers though can't be modified. `let`
functions much like `var` but it is again, scope blocked like `const`.

#### Arrow Functions
Arrow functions are useful to clean up when using callback functions. They're also useful since
they're a couple less keystrokes than using the `function` keyword. Another important feature
of arrow functions is that they bind the context in which they are executed. This means that you
can use in place of a bind in certain situations like in a React component's onClick method or
similar. (See line 34 of `App.jsx` for an example in practice) Arrowfunctions also are different
from `function` declarations in that they do not have access to the `arguments` object. Instead,
when using arrow functions, you must use the rest (`...`) operator to allow access to all input
parameters.

#### Destructuring


#### Classes

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

#### Promises

## React Client
The React folder has a client that an example of a real-world use of object destructuring and arrow
function binding. Follow the setup instructions to see how it works or just take a look at the code
in the React directory.

#### Setup
To get the sample React App running on your local machine, just follow the steps following.

- `npm install` to get things all dependencies installed
- `npm run start:dev` to get Express to serve static content and open up the localhost to display
the sample website.
