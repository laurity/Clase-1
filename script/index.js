//Función para generar un color aleatorio en formato hexadecimal
const generateRandomColor = () =>{
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16); //saber que color queremos
    //Math.floor --> redondea el num
    //Math.random --> te genera un num random multiplicado * el num que le digas
    //to.string --> transformar a un string
    console.log("Color hexadecimal generado: " + color);
    return color;
}

//Función para cambiar el color de fondo del body
const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
}

//Agregar un evento al botón para cambiar el color al hacer click
const changeColorBtn = document.getElementById("changeColorBtn"); //quiero traer al html esta funcino de js

//document es el navegador que tengo abierto. body la zona donde quiero cambiar el color. style. entrar en estilos. background lo que quiere hacer
//onClick, un atributo que llama a una funcion HTML

// Refactorizar: ctrl mayus p
