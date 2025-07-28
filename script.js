// Timer
let seconds = 0;
let minutes = 0;
const timerDisplay = document.getElementById("timer");

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  timerDisplay.textContent = 
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
setInterval(updateTimer, 1000);

// Drag logic
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  let offsetX, offsetY;

  box.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;

    function moveAt(e) {
      box.style.left = `${e.clientX - offsetX}px`;
      box.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseMove(e) {
      moveAt(e);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  });
});


