const btn=document.querySelector('button');
const body=document.querySelector('body');

const colors=['blue', 'yellow', 'Green','black', 'white'];

btn.addEventListener('click', fondo);

function fondo(){
    var indice = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[indice];
}
