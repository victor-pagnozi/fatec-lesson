const array = ['1', '2', '3', '4', '5'];

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
