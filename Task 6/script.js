/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

function getUserAverageAge() {
  const averageAge = users.reduce((r, c) => r + c.age, 0) / users.length;
  console.log(averageAge);
}

console.log(getUserAverageAge());

function getUsersNames() {
  const usersNames = users.map((person) => person.name);
  console.log(usersNames);
}

console.log(getUsersNames());

//ARNO ATSAKYMAS:

// console.log('Vidutinis amžius:',getUserAverageAge(users))
// console.log('Naujas array:', getUsersNames(users))

// function getUserAverageAge(given){
//   var up = 0;
//   var down = 0;
//   for(let i=0; i<given.length; i++)
//   {
//     up += parseInt(given[i]['age'])
//     down = i;
//   }
//   return (up/(down+1)).toFixed(1)
// }

// function getUsersNames(given){
//   var newArray = []
//   for(let x=0; x<given.length; x++)
//   {
//     newArray.push(given[x]['name'])
//   }
//   return newArray;
// }
