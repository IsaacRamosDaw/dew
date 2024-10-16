const imgUrl = 'brick.jpg';
const container = document.getElementById('table-container');
const hiddenBricks = [];
let counter = 0;

function insertImage(){
  counter++;
  if (counter < 55){
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'ladrillo';
    img.id = 'img-' + counter;

    img.addEventListener('click', () => {
      img.style.visibility = 'hidden';
      hiddenBricks.push(img);

    });

    container.appendChild(img);
  } else if(hiddenBricks.length > 0){

    hiddenBricks[0].style.visibility='initial';
    hiddenBricks.shift();
  }
}

setInterval(insertImage, 1000);


//! MIRIAM WAY
// document.addEventListener('DOMContentLoaded', function() {
//   let constructionTime = 100; // Tiempo en milisegundos para crear un nuevo ladrillo
//   let gameContainer = document.getElementById('table-container'); // Contenedor donde se mostrarán los ladrillos
//   let currentX = 0; // Posición X inicial para los ladrillos
//   const brickWidth = 50; // Ancho del ladrillo puesto por nosotros

// //   // Función para crear un ladrillo
//   function createBrick() {
//       // Verifica si hay espacio suficiente en el contenedor
//       if (currentX + brickWidth <= gameContainer.clientWidth) {
//           let brick = document.createElement('div'); // Crea un nuevo div
//           brick.className = 'brick'; // Asigna la clase "brick
//           // Establece las propiedades de estilo
//           brick.style.left = currentX + 'px'; // Establece la posición X actual
//           brick.style.top = (gameContainer.clientHeight / 2 - brickWidth / 2) + 'px'; // Centra verticalmente
//           currentX += brickWidth; // Actualiza la posición X para el próximo ladrillo //removeChild
//           // Añade el ladrillo al contenedor
//           gameContainer.appendChild(brick);              
//           // Maneja el clic en el ladrillo
//           brick.addEventListener('click', function() {
//               gameContainer.removeChild(brick); // Elimina el ladrillo al hacer clic
//           });
//       } else {
//           // Reinicia la posición X si se alcanzó el borde derecho
//           currentX = 0;
//       }
//   }

//   // Crear un ladrillo cada segundo
//   setInterval(createBrick, constructionTime);
// });