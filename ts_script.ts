

console.log('Hello there')

hello('hello')

var hello1 = 1 // OLD
const hello3 = 3 // Constant value, can't re-assign
let hello2 = 2 // Mutable value, can re-assign
hello2 = 2.2;

const helloString: string = '';
const helloUnion: string | number = Date.now() > 0 ? '': 1;
const helloNumber: number = 0;
const helloObject: object = {};
const helloBoolean: boolean = true; // false

console.log(helloObject === {}) // false (different ref)
console.log(typeof helloObject === 'object') // true (primitives use same ref)

// Check if null or undefined
if (nullable == null) {
  
}

if (typeof helloUnion === 'boolean') {
  hello(helloUnion)
} else if (typeof helloUnion === 'number') {
  hello(helloUnion)
}

function hello(input: string): void {
  console.log('Hello world')
  // Nothing
  return; // Return nothing
  return undefined; // Return undefined
}