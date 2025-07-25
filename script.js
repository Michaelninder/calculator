const displayContent = document.getElementById('display-content');
const resetBtn = document.getElementById('reset-btn');
const numberBtns = document.querySelectorAll('.input-btn.number .btn-link');
const operatorBtns = document.querySelectorAll(
  '.input-btn.operator .operator-btn'
);

document.addEventListener('DOMContentLoaded', () => {
  const allButtons = document.querySelectorAll('.input-btn');
  allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
