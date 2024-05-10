function add10 (a: number): number {
  return a += 10;
}

function sub10 (a: number) {
  return a -= 10;
}

let b = add10(2);
let c = sub10(3);

console.log('b = ', b);
console.log('c = ', c);
