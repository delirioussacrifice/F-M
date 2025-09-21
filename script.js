// Música
const cancion = document.getElementById('miCancion');

function reproducir() {
  cancion.play();
}

function pausar() {
  cancion.pause();
}

// Corazones flotando
const corazonesContainer = document.getElementById('corazones');

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.style.left = Math.random() * window.innerWidth + 'px';
  corazon.textContent = '💛';
  corazonesContainer.appendChild(corazon);

  setTimeout(() => {
    corazonesContainer.removeChild(corazon);
  }, 5000); // dura lo mismo que la animación
}

// Cada 0.5s crea un corazón
setInterval(crearCorazon, 500);