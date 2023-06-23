"use strict";
const metricUnits = document.getElementById("metric-units");
const imperialUnits = document.getElementById("imperial-units");
const metricForm = document.querySelector(".calculator-metric");
const imperialForm = document.querySelector(".calculator-imperial");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const bmiResult = document.querySelector(".calculator__result-span");
const messageOutput = document.querySelector(".calculator__second-result");
const kgOutput = document.querySelector(".calculator__second-span");
const ftInput = document.querySelector(".calculator-form__input-ft");
const inInput = document.querySelector(".calculator-form__input-in");
const stInput = document.querySelector(".calculator-form__input-st");
const lbsInput = document.querySelector(".calculator-form__input-lbs");
const normalBMI = (18.5 + 24.9) / 2;
const messages = {
  underweight: "Your BMI suggests you’re Underweight",
  healthy: "Your BMI suggests you’re Healthy weight",
  overweight: "Your BMI suggests you’re Overweight",
  obese: "Your BMI suggests you’re Obese",
};
let heightValue;
let weightValue;
let inches;
let pounds;
let bmi;
function getMetricForm() {
  metricForm.classList.remove("hidden");
  imperialForm.classList.add("hidden");
}
function getImperialForm() {
  imperialForm.classList.remove("hidden");
  metricForm.classList.add("hidden");
}

function getMetricValues() {
  heightValue = heightInput.value;
  weightValue = weightInput.value;
  bmi = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);
  bmiResult.textContent = bmi;
  getMessage();
  getIdealMetricWeight();
}
function getImperialValues() {
  const ftValue = ftInput.value;
  const inchValue = inInput.value;
  const stValue = stInput.value;
  const lbsValue = lbsInput.value;
  inches = Number(ftValue) * 12 + Number(inchValue);
  pounds = Number(stValue) * 14 + Number(lbsValue);
  bmi = ((pounds / Math.pow(inches, 2)) * 703).toFixed(1);
  bmiResult.textContent = bmi;
  getMessage();
  getIdealImperialWeight();
}

function getMessage() {
  if (bmi < 18.5) {
    messageOutput.textContent = messages.underweight;
  } else if (bmi <= 24.9) {
    messageOutput.textContent = messages.healthy;
  } else if (bmi <= 29.9) {
    messageOutput.textContent = messages.overweight;
  } else {
    messageOutput.textContent = messages.obese;
  }
}
function getIdealImperialWeight() {
  const idealWeight = (normalBMI * Math.pow(inches, 2)) / 703;
  const stFromLbs = (idealWeight / 14).toFixed(2);
  const restLbs = (idealWeight % 14).toFixed(2);
  kgOutput.textContent = `Your ideal weight is ${stFromLbs}st and ${restLbs} lbs`;
}
function getIdealMetricWeight() {
  const heightInMeters = heightValue / 100;
  const idealWeight = (normalBMI * Math.pow(heightInMeters, 2)).toFixed(2);
  kgOutput.textContent = `Your ideal weight is ${idealWeight} kg`;
}
metricUnits.addEventListener("click", getMetricForm);
imperialUnits.addEventListener("click", getImperialForm);
heightInput.addEventListener("change", getMetricValues);
weightInput.addEventListener("change", getMetricValues);
ftInput.addEventListener("change", getImperialValues);
inInput.addEventListener("change", getImperialValues);
stInput.addEventListener("change", getImperialValues);
lbsInput.addEventListener("change", getImperialValues);
