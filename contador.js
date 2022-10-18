
function solucion(array) {
  const newArray = array.map(item => item + 1);
  return console.log(newArray);
}
solucion([1, 2, 3, 4, 5, 6, 7, 8]);




const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const contador = (random) => {
  random.forEach(item => console.log('forEach', item));
}
contador(num);

const contador2 = (random) => {

  if (random < 100) {
    random++;
  } else {
    random = 0;
  }
}
contador2([0]);