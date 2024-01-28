const {chunk,get,set,omit,pick,isEmpty,padStart} = require('lodash');
const mapValues = require('lodash/mapValues');
const array = [1, 2, 3, 4, 5];
const arr2 = chunk(array,2)
console.log(arr2);// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

const object = {
    name: 'John',
    age: 20,
    address: {
      street: '123 Main Street',
      city: 'San Francisco',
    },
  };

// get
console.log(get(object,'address.city'));
// set
console.log(set(object,'address.city','New York'));
console.log(set(object,'address.city.aa','New York')); // address: { street: '123 Main Street', city: { aa: 'New York' } }

// omit 剔除对象身上的属性
console.log(omit(object,'address.city'));

// _.pick() ：从对象中选择指定的属性。
console.log(pick(object,'name','age'));
console.log(pick(object,['name','address.street']));

console.log(isEmpty(object)); // false
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true

// mapValues 遍历对象
let scores = {
    'John': 80,
    'Alice': 90,
    'Bob': 75,
  };
console.log(mapValues(scores,(value)=>{
    if (value >= 90) {
    return 'A';
    } else if (value >= 80) {
    return 'B';
    } else {
    return 'C';
    }
})); // { John: 'B', Alice: 'A', Bob: 'C' }

console.log(padStart('1',3,'0')); // ‘001’