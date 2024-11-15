function add(firstNumber,secondNumber){
    return firstNumber+secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber-secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber/secondNumber
}

function operate(operator, firstNumber, secondNumber){
    let answer;

    switch(operator){
        case '+':
            answer = add(firstNumber,secondNumber);
            break
        case '-':
            answer = subtract(firstNumber,secondNumber);
            break
        case 'x':
            answer = multiply(firstNumber,secondNumber);
            break
        case '/':
            answer = divide(firstNumber,secondNumber).toFixed(2)
    }

    return answer
}

function evaluate(input,operators){
    for(y in operators){
        if (input.value.includes(operators[y])){

            let operator = operators[y]
            let firstNumber = parseInt(input.value.slice(0,input.value.indexOf(operator)))
            let secondNumber = parseInt(input.value.slice(input.value.indexOf(operator)+1))

            try{
                input.value = operate(operator,firstNumber,secondNumber).toString()

                if(isNaN(input.value)) throw 'Value is not a number. Ensure to enter the calculation correctly'
                if(!(isFinite(input.value))) throw "You silly Billy. You can't divide by zero"
            } catch (error) {
                alert(error)
            }
            
        }
    }
}
const input = document.querySelector('#display');
const keys = document.querySelector('.keys')

let keyList = ['C','/','x','-','7','8','9','+','4','5','6','=','1','2','3','0']
let operators = ['+','x','-','/']
let operCount = 0

for(x in keyList){
    const key = document.createElement('div')
    key.setAttribute('class', 'key');
    key.textContent = keyList[x];
    keys.appendChild(key)
    
    key.addEventListener('click', () =>{

        if(operators.includes(key.textContent)){
            operCount++

            if(operCount = 2){
                evaluate(input,operators)
                
                operCount = 0
            }
        }

        if(key.textContent == '='){
            evaluate(input,operators)

            operCount = 0

        }else if(key.textContent != 'C'){
            input.value += key.textContent

        }else{
            input.value = ''
        }
    })

}



