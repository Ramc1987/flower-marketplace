const CODELENGTH = 4;
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let code = '';


function generateCapcheCode() {
  for (let i = 0; i <= CODELENGTH; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    code += chars.substring(randomNumber, randomNumber + 1);
  }
  document.querySelector('.capche-code').value = code;
}

export {generateCapcheCode};
