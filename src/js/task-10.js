function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear previous boxes
  
  let width = 30;
  let height = 30;
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    
    // Increase dimensions for the next box
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear all boxes
}

document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('input[type="number"]');
  
  createButton.addEventListener('click', function() {
    const amount = parseInt(input.value);
    if (!isNaN(amount)) {
      createBoxes(amount);
    }
  });
  
  destroyButton.addEventListener('click', destroyBoxes);
});
