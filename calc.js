class Calculate {
    constructor(num){
        this.calcNum = num;
        this.num1 =  'num1 ' + this.calcNum;
        this.num2 = 'num2 ' + this.calcNum;
        this.operator = 'operator ' +  this.calcNum ;
        this.result = 'result ' + this.calcNum;
        this.btn = 'btn' + this.calcNum;
    };

    createElement = ()=>{
        let container = document.createElement('div');
        container.classList.add('container');

        let num1 = document.createElement('input')
        num1.id = this.num1;

        let operator = document.createElement('input')
        operator.id =this.operator;

        let num2 = document.createElement('input')
        num2.id =  this.num2;

        let btn = document.createElement('button')
        btn.id = this.btn;
        btn.textContent = 'result';
       
        let result = document.createElement('span')
        result.id = this.result;


        result.textContent = 0;
        container.append(num1); 
        container.append(operator);
        container.append(num2);
        container.append(btn);
        container.append(result);
        document.body.append(container);


        let newBtn = document.getElementById(this.btn)
        newBtn.addEventListener('click', this.solve);
    };
    
    solve = ()=>{
        let num1 = document.getElementById(this.num1);
        let num2 = document.getElementById(this.num2);
        let operator = document.getElementById(this.operator); 
        let result = document.getElementById(this.result);
        console.log(operator.value)
        switch (operator.value) {
            case '+':
               return result.textContent = parseInt(num1.value) + parseInt(num2.value);
            case '-':
                return result.textContent = parseInt(num1.value) - parseInt(num2.value);
            case '*':
                return result.textContent = parseInt(num1.value) * parseInt(num2.value);
            case '/':
                return result.textContent = parseInt(num1.value) / parseInt(num2.value);
            case '**':
                return result.textContent = parseInt(num1.value) ** parseInt(num2.value)
            default:
                break
        }; 
    }
}

const calc = new Calculate(1);
calc.createElement();

const calc2 = new Calculate(2);
calc2.createElement();
