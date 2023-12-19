document.addEventListener('DOMContentLoaded', function() {
  
    let currentOperator = '';
    let previousValue = '';
    let currentValue = '0';
    let currentExp = '';
const ansElement = document.getElementById('ans');


//click event funtion for recognizing number button
const numberButton = document.querySelectorAll('button');
console.log(numberButton);
numberButton.forEach((button) => {
    button.addEventListener('click', function () {
        let value = this.value;
        if(value == '.' || !isNaN(value))
            setExpression(value);
        else if(value === '='){
            calculate();
        }else{
            setOperator(value);
        }
        Display();
    })

})


//diaplying the expression and result
function Display() {
    ansElement.textContent = currentExp!== '' ? currentExp : currentValue;
}


//setting the expression for evalution
function setExpression(value) {
    if(currentValue === '0'){
        currentValue = value;
    }
    else {
        currentValue  += value;
    }
    currentExp += value;
    Display();

}

function setOperator(value) {
    if(currentValue !== '0'){
        currentOperator = value;
        currentExp += value;
        previousValue = currentValue;
        currentValue = '0';
    }

    
}

function calculate(){
    let result = 0;
    const n1 = parseFloat(previousValue);
    const n2 = parseFloat(currentValue);

    switch (currentOperator) {
        
        case '+': result = n1 + n2;break;
        case '-': result = n1 - n2;break;
        case '/': result = n1 / n2;break;
        case '*': result = n1 * n2;break;
           
        default:
            alert("please enter valid operator")
    }
    currentValue = result.toString();
    currentExp ='';
    currentOperator ='';
    previousValue = '';

    Display();
}

    const ACbutton = document.querySelector("#allclear");
    ACbutton.addEventListener('click', () =>{
        ansElement.textContent="";
        currentExp=""
    })
});
