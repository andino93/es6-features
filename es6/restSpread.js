const array = ['one', 'two', 'three', 'four', 'five'];
console.log('spreading out array into single items: ', ...array);

const copyOfArray = [...array];
console.log('shallow copy of array: ', copyOfArray);

const array2 = ['six', 'seven', 'eight', 'nine', 'ten'];

const combine = [...array, ...array2];
console.log('combining array and array2: ', combine);

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

const obj1 = {
  name: 'Lois Lane',
  occupation: 'Journalist',
  company: 'Daily Planet',
  residence: 'Metropolis',
};

const obj2 = {
  name2: 'Vicki Vale',
  occupation2: 'Photographer',
  company2: 'Gotham Gazette',
  residence2: 'Gotham',
};

const reporters = { ...obj1, ...obj2 };
console.log(reporters);

const mixEvents = (obj) => {
  const events = {};
  obj.on = (event, callback) => { // eslint-disable-line no-param-reassign
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  obj.trigger = (...event) => { // eslint-disable-line no-param-reassign
    if (!events[event[0]]) return;
    const args = event.slice(1);
    events[event[0]].forEach(cb => cb.apply(obj, args));
  };
  return obj;
};

const printColors = (first, second, third, ...others) => {
  console.log(`Top three colors are ${first}, ${second} and ${third}. Others are: ${others}`);
};

const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange'];
printColors(...colors);
