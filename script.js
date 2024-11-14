const input = document.querySelector('#display');
const clear = document.querySelector('#C');
const keys = document.querySelector('.keys')

let keyList = ['C','/','x','-','7','8','9','+','4','5','6','=','1','2','3','0']
let operators = ['+','x','-','/']
for(x in keyList){
    const key = document.createElement('div')
    key.setAttribute('class', 'key');
    key.textContent = keyList[x];
    keys.appendChild(key)
    
    key.addEventListener('click', () =>{

        if(key.textContent == '='){
            for(y in operators){
                if (input.value.includes(operators[y])){
                    let operator = operators[y]
                    let firstNumber = input.value.slice(0,input.value.indexOf(operator))
                    let lastNumber = input.value.slice(input.value.indexOf(operator)+1)
                    console.log(firstNumber,operator,lastNumber)
                }
            }
        }else if(key.textContent != 'C'){
            input.value += key.textContent
        }



    })

}


