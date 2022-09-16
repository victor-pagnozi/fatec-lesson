const array = [1, 2, 3, 4, 5];

for (const item of array) {
  console.log(item);
}

// Diferença do for each para o map é que no for each não da para retornar um item
// Já o map você consegue retornar dentro dele
// !Important: O Map sempre irá retornar um vetor do mesmo tamanho do original
const newArrayForEachReturn = array.forEach((item) => {
  return item * 2;
});

console.log(newArrayForEachReturn);

// Para funcionar no forEach podemos
const newArrayForEachSeparated = [];
array.forEach((item) => {
  newArrayForEachSeparated.push(item);
});

console.log(newArrayForEachSeparated);

const newArrayMapped = array.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }
  return item;
});
console.log(newArrayMapped);
//**--------------------------------------------------------- */
//Find e FindIndex
//Find sempre retornará o primeiro valor encontrado pela condição especificada na função.
//Find index é igual, mas ao invés de retornar o valor, irá retornar a posição em que o valor se encontra
const par = array.find((number) => number % 2 === 0);
const indexPar = array.findIndex((number) => number % 2 === 0);
console.log(par);
console.log(indexPar);

//Filter como o próprio nome indica ele irá filtrar um vetor e irá retornar o array filtrado
const users = [
  {
    name: "Fulano",
    dueDate: 5,
  },
  {
    name: "Fulano",
    dueDate: 10,
  },
  {
    name: "Fulano",
    dueDate: 5,
  },
];

const dayFive = users.filter((user) => user.dueDate === 5);
const dayTen = users.filter((user) => user.dueDate === 10);
console.log(dayFive.length);
console.log(dayTen.length);

//**--------------------------------------------------------- */
const user = {
  name: 'Victor',
  age: 26,
  occupation: 'Developer',
  address: {
    street: 'Rua X',
    zipCode: 87901
  }
};

console.log(user);

console.log('name' in user);
console.log(Object.keys(user));
console.log(Object.values(user));

//Desestruturação
const { address, age: idade, occupation = 'Administration' } = user;
console.log(address, idade, occupation);

// console.log(user.hands.quantity)
console.log(user.hands ? user.hands.quantity : 'Não informado');
console.log(user.hands?.quantity ?? 'Não informado');
