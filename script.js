"use script";

const button = document.getElementById("btn");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const result = document.getElementById("output");
const heightError = document.getElementById("height_error");
const weightError = document.getElementById("weight_error");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let height_status = false,
    weight_status = false;

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);
  console.log(height, weight);

  if (height === "" || isNaN(height) || height <= 0) {
    heightError.innerHTML = "Please provide a valid height!";
  } else {
    heightError.innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || height <= 0) {
    weightError.innerHTML = "Please provide a valid weight!";
  } else {
    weightError.innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);

    if (bmi < 18.6) {
      result.innerHTML = "Under weight: " + bmi;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal: " + bmi;
    } else {
      result.innerHTML = "Over weight: " + bmi;
    }
  } else {
    alert("The form has erros");
    result.innerHTML = "";
  }
});
