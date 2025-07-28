let currentBox = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mousedown', (e) => {
    currentBox = box;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', (e) => {
  if (currentBox) {
    currentBox.style.left = `${e.clientX - offsetX}px`;
    currentBox.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  if (currentBox) {
    currentBox.style.cursor = 'grab';
    currentBox = null;
  }
});
