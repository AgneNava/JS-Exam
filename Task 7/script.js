/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// const showObjectKeys = Object.keys(audi);
// console.log(showObjectKeys);

function showObjectKeys() {
  const objectKeys = Object.keys(audi);
  console.log(objectKeys);
}
console.log(showObjectKeys());

//ARNO ATSAKYMAS:

// console.log(showObjectKeys(audi))

// function showObjectKeys(given){
//   return Object.keys(given);
// }
