const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

// lets create a empty array & empty string to keep the track of calculation

  let calculation = [];
  let accumlativeCalculation;

// now create a function , handle the button clicks in different cases

function calculate(button){
    //   we gonna take click button value as an argument & extract kqrenge text

    const value = button.textContent;

    if(value === "CLEAR"){
        calculation = [];
        screenDisplay.textContent = "0";
    }
    else if (value === "="){
        screenDisplay.textContent = eval(accumlativeCalculation);
        calculation = [];
        accumlativeCalculation = "";
    }
    else{
        calculation.push(value);
        accumlativeCalculation = calculation.join('');
        screenDisplay.textContent = accumlativeCalculation;
    }
}
   buttons.forEach(button => button.addEventListener('click' , () => calculate(button)));

   screenDisplay.style.backgroundColor = '#a8a8a8';

