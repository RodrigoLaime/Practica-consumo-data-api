const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");
const img = document.querySelector("#container-img")

let users = [];

/* evento que se aplica al navegador */
window.addEventListener("DOMContentLoaded", async () => {
  /* domcontent indica cuando los datos ya cargan y se puede ejecutar logica */
  userList.innerHTML =
    "<h1>Loading</h1>"; /* antes de que se cargen los datos se muestra loading */

  const data = await loadUsers();
  console.log(data);
  users = data.data; /* guardamos los datos en el array user */
  renderUsers(
    users
  ) /* y renderizamos en el navegador los datos directamente del arreglo users */
});

/* evento al input  */
input.addEventListener("keyup", (e) => {
  /* keyup da informacion de lo que esta tipeando el usuario en el input */
  const newUsers = users.filter(
    (
      user /* filter crea un array con todos los que cumplen con la condicion */
    ) =>
      `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.email.toLowerCase()}`.includes(
        /* includes te indica si existe o no */
        input.value.toLowerCase()
      )
  );
 /*  const newImage = users.filter("keyup", (e) => {
    `${user.firstname.toLowerCase()}`
  }) */
  renderUsers(newUsers);
});

async function loadUsers() {
  const res = await fetch("https://fakerapi.it/api/v1/users?_quantity=1000");
  const response = await res.json();
  return response;
}

/* funcion que va a recoorer el arreglo de usuarios */
const createUserItems = (users) =>
  users.map(
      (user) => `<li class="lista">${user.firstname}</li> 
    <li class="lista">${user.lastname}</li> 
    <li class="lista listaEmail">${user.email}</li>`
    )
    .join(" "); /* el joun(' ') es para separar por espacio y no por comas*/

const createimg = (users) => users.map((user) => `<img src="${user.image}"></img>`).join(" ");
/* esta funcion va a recivir un arreglo de usuasrios al cual vamos a recorrer*/
function renderUsers(users) {
  const itemsString = createUserItems(users);
  const itemsImg = createimg(users);
  userList.innerHTML = itemsString;
  img.innerHTML = itemsImg;
}
