/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const fetchCars = async () => {
  const response = await fetch("./cars.json");
  const json = await response.json();

  displayCars(json);
};

const displayCars = (cars) => {
  const carsContainer = document.getElementById("output");
  carsContainer.setAttribute("class", "cars-container");

  cars.map((car) => {
    const carContainer = document.createElement("div");
    carContainer.setAttribute("class", "car-container");

    const producerName = document.createElement("h2");
    const modelsTitle = document.createElement("h3");
    const modelsProduced = document.createElement("p");

    producerName.textContent = `Brand: ${car.brand}`;
    modelsTitle.textContent = "Models: ";
    modelsProduced.textContent = car.models;

    carContainer.append(producerName, modelsTitle, modelsProduced);
    carsContainer.append(carContainer);
  });
};

fetchCars();
