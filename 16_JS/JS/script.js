let a = 6;

console.log(a);

let inputIn = document.querySelector('.input-in'); // input
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');

button.onclick = function(){
  // кнопка будет нажата
  console.log('Работает!');
  console.log(inputIn.value); // value - то чт введено в input
  let b = +inputIn.value; // + перевести число!
  console.log(b + 2);
  div.innerHTML = b;
  inputIn.value = '';
}