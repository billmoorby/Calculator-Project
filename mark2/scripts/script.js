let calculation = localStorage.getItem('calculation') || '';

display_calculation();

function update_calculation(value) {
  calculation += value;
  display_calculation();

  localStorage.setItem('calculation', calculation);
};

function display_calculation() {
  document.querySelector('.js_calculation')
    .innerHTML = `${calculation}`;
};
