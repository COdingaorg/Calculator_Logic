function addition(number1, number2){
  return number1+number2;
}
function subtraction(number1, number2){
  return number1-number2
}
function multiplication(number1, number2){
  return number1*number2
}
function division(number1, number2){
  return number1/number2
}
function remainder(number1, number2){
  return number1%number2
}
let number1 = parseInt(prompt('Enter the first number'));
let number2 = parseInt(prompt('Enter the second number'));
alert(`The sum is ${addition(number1, number2)}`);/*
//Calculating BMI. BMI=kg/m2
let weight=prompt(`Enter your weight in KG`);
let height= prompt(`Enter your height in Metres`);
function bmi(weight, height){
  return weight/(height*height);
}
alert(bmi(230,1.6));*/

