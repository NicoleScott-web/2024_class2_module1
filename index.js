let Dogs = ['Poodle', 'Husky', 'Schnauzer'];
console.log(Dogs[2]); // 'Poodle'
console.log(Dogs[0]); // 'Husky'
console.log(Dogs[1]); // 'Schnauzer'
console.log (Dogs)
Dogs.unshift('Kelpie');
console.log(Dogs); // [ 'Kelpie', 'Poodle', 'Husky', 'Schnauzer' ]
Dogs.push('Poodle');
console.log(Dogs);
Dogs[0] = 'Husky';
console.log(Dogs); // [ 'Kelpie', 'Poodle', 'Husky', 'Schnauzer', 'Poodle' ]
let firstDogs = Dogs.shift();
console.log(Dogs)




