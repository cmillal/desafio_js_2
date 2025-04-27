//index 1

document.addEventListener('DOMContentLoaded', function() {
    const imagenDespegando = document.querySelector('.cohete img');

    if (imagenDespegando) {
        imagenDespegando.addEventListener('click', function() {
            this.classList.toggle('con-borde-rojo');
        });
    } else {
        console.error('No se encontró la imagen con la clase .cohete img');
    }
});

//index dos

document.addEventListener('DOMContentLoaded', function() {
    
    const sticker1Input = document.getElementById('sticker1');
    const sticker2Input = document.getElementById('sticker2');
    const sticker3Input = document.getElementById('sticker3');
    const resultadoParrafo = document.createElement('p'); 
    const seccionStickers = document.querySelector('.stick'); 
    window.Verificar = function() {
        // Obtener los valores de los inputs y convertirlos a números
        const cantidad1 = parseInt(sticker1Input.value);
        const cantidad2 = parseInt(sticker2Input.value);
        const cantidad3 = parseInt(sticker3Input.value);

      
        const totalStickers = cantidad1 + cantidad2 + cantidad3;

       
        if (totalStickers <= 10) {
            resultadoParrafo.textContent = `Llevas ${totalStickers} stickers`;
        } else {
            resultadoParrafo.textContent = 'Llevas demasiados stickers';
        }
        if (!seccionStickers.contains(resultadoParrafo)) {
            seccionStickers.appendChild(resultadoParrafo);
        }
    };
});

//index 3

document.addEventListener('DOMContentLoaded', function() {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    const select3 = document.getElementById('select3');
    const ingresarButton = document.querySelector('.ingresa button');
    const resultadoParrafo = document.querySelector('.ingresar p'); // Seleccionamos el párrafo existente
  
    ingresarButton.addEventListener('click', function() {
      const passwordIngresado = select1.value + select2.value + select3.value;
  
      if (passwordIngresado === '911') {
        resultadoParrafo.textContent = 'password 1 correcto';
      } else if (passwordIngresado === '714') {
        resultadoParrafo.textContent = 'password 2 es correcto la nave aterrizo con exito';
      } else {
        resultadoParrafo.textContent = 'password incorrecto';
      }
    });
  });