function calculator(){
    var num1=parseFloat(prompt("Enter First Number: "));
    var num2=parseFloat(prompt("Enter Second Number: "));
    var sym=prompt("Enter operation: +,-,*,/,%");
    var result;
    if(isNaN(num1) || isNaN(num2)){
        alert('Enter valid number');
        return;
    }
    switch (sym) {
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case  "*":
            result=num1*num2;
            break;
        case "/":
            if(num2==0){
                alert('Undefined');
                return;
            }    
            result=num1/num2;
            break;
        case "%":
            if(num2==0){
                alert('Modulo by 0 not allowed');
                return;
            }
            result=num1%num2;
            break;
         default:
            alert('Choose correct operation!!');
            return;       
    }
    alert("Result: "+result);
}