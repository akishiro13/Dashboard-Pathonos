let isDragging = false;
let initialX = 0;
let initialY = 0;
let initialWidth = 0;
let initialHeight = 0;

const resizableDiv = document.getElementById('acsbar');
const resizeHandle = document.getElementById('resizeHandle');

resizeHandle.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialX = e.clientX;
  //initialY = e.clientY;
  initialWidth = resizableDiv.offsetWidth;
  //initialHeight = resizableDiv.offsetHeight;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - initialX;
    //const deltaY = e.clientY - initialY;
    resizableDiv.style.width = `${initialWidth + deltaX}px`;
    //resizableDiv.style.height = `${initialHeight + deltaY}px`;
    removeInfoBox('resizeInfoBox')
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});