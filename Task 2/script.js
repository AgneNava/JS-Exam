/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let clickMe = document.getElementById("btn__element");
var countClicks = 0;

clickMe.addEventListener("click", function () {
  countClicks += 1;
  console.log(countClicks);

  document.getElementById("btn__state").innerHTML = countClicks;
});
