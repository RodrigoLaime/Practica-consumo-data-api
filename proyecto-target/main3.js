const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");
/* const containerImg = document.querySelector("#container-img"); */

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
      ` ${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.email.toLowerCase()}`.includes(
        /* includes te indica si existe o no */
        input.value.toLowerCase()
      )
  );
  /*  const newImage = users.filter("keyup", (e) => {
     `${user.firstname.toLowerCase()}`
   }) */
  renderUsers(newUsers);
});




/* const contador = (random) => {
  for (let i = 0; i < random; i++) {
    let element = random[i];
    return;
  }
} */

/* const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; */
/* const contador = (random) => {
  if (random < 100) {
    random++;
  } else {
    random = 0;
  } */
/* for (let i = 0; i < random; i++) {
  let element = random[i] + 1;
  return console.log(element);
} */
/*  random.forEach(item => console.log('forEach', item + 1)); */
/* } */
/* contador(num); */



async function loadUsers() {
  const res = await fetch(`https://fakerapi.it/api/v1/users?_quantity=20`);
  const response = await res.json();
  return response;
}

/* funcion que va a recoorer el arreglo de usuarios */
const createUserItems = (users) =>
  users.map(
    (user) => `<img src="${user.image}"></img>
    <div class="container-name">
    <li class="lista">${user.firstname}</li> 
    <li class="lista">${user.lastname}</li> 
    </div>
    <li class="lista listaEmail">${user.email}</li>`
  )
    .join(" "); /* el joun(' ') es para separar por espacio y no por comas*/

/* const createUserItems2 = ((users) => {
  console.log(users);
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    console.log('for', element.image);
  }
}) */

/* const createUserItems2 = (users) => users.forEach(item => `<img src="${item.image}"></img>`); */
/* esta funcion va a recivir un arreglo de usuasrios al cual vamos a recorrer*/
function renderUsers(users) {
  const itemsString = createUserItems(users);
  /*   const itemsString2 = createUserItems2(users); */
  userList.innerHTML = itemsString;
  /*   containerImg.innerHTML = itemsString2; */
}
