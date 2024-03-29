/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const state = {};

function renderUsers(users) {
  const userContainer = document.getElementById("output");
  userContainer.innerHTML = "";

  users.filter((user) => {
    const userLogin = document.createElement("h3");
    userLogin.innerText = user.login;

    const userAvatarUrl = document.createElement("img");
    userAvatarUrl.src = user.avatar_url;
    userAvatarUrl.style.width = "5rem";
    userAvatarUrl.style.height = "auto";
    userAvatarUrl.style.margin = "0.5rem";

    const userCard = document.createElement("div");
    userCard.setAttribute("class", "user-card");
    userCard.style.width = "80%";
    userCard.style.border = "1px solid #979797";
    userCard.style.margin = "0 auto";
    userCard.style.marginBottom = "0.5rem";
    userCard.style.boxShadow =
      "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 9px 12px 23px -30px #979797";
    userCard.style.textAlign = "center";
    userCard.append(userLogin, userAvatarUrl);
    userContainer.append(userCard);
  });
}

function fetchUsers() {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then((data) => {
      state["users"] = data;
      renderUsers(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

document.getElementById("btn").addEventListener("click", () => {
  return fetchUsers();

  document.getElementById("otput").innerText = "";
});

// ARNBO ATSAKYMAS:

// fetch(ENDPOINT).then((response) => {
//   if(response.ok) return response.json();
//   else{ throw new Error('Nepavyko prisijungti')}
// }).then(data => {
//   users = data;
// }).catch((error) => console.error("Klaida:", error))

// document.getElementById('btn').addEventListener('click', function(){
//   document.getElementById('output').innerHTML = ``
//   for(let x = 0; x < users.length; x++)
//   {
//       document.getElementById('output').innerHTML += `<div style="border-bottom:groove"><img src="${users[x]['avatar_url']}" class="imgUser"><div class="idUser">${users[x]['login']}</div></div>`
//   }
// })
