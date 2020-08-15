let height = document.getElementById('height-input'); 
let weight = document.getElementById('weight-input'); 
let button = document.getElementById('button-submit'); 

let output = document.getElementById('bmi-output'); 


let calcBmi = function () {
  let h_value = height.value;
  let w_value = weight.value;
  h_value /= 100;
  let bmi = w_value / (h_value * h_value);
  bmi = Math.floor(bmi * 10) / 10;
  output.innerHTML = bmi;
}

button.addEventListener('click', calcBmi);