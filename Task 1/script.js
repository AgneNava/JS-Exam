/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const weightConverter = document.querySelector("form");
const kilogramsInput = document.getElementById("search");
const outputDiv = document.getElementById("output");

weightConverter.addEventListener("submit", (event) => {
  event.preventDefault();
  const kilogramsEntered = Number(kilogramsInput.value);

  outputDiv.innerText = "";

  const resultPounds = document.createElement("p");
  resultPounds.setAttribute("class", "output-pounds");
  resultPounds.innerText = `1.Svarai (lb): ${kilogramsEntered * 2.2046}`;

  const resultGrams = document.createElement("p");
  resultGrams.setAttribute("class", "output-grams");
  resultGrams.innerText = `2.Gramai (g): ${kilogramsEntered / 0.001}`;

  const resultOunces = document.createElement("p");
  resultOunces.innerText = `3.Uncijos (oz): ${kilogramsEntered * 35.274}`;
  outputDiv.append(resultPounds, resultGrams, resultOunces);
});
