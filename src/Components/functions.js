function validateNumbers(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return false;
    }
    return true;
}
export function addNumbers(num1, num2){
    if (validateNumbers(num1, num2)){
        return "Invalid number";    
    }
    return num1 + num2;
}
export function subNumbers(num1, num2){
    if (validateNumbers(num1, num2)){
        return "Invalid number";    
    }
    return num1 - num2;
}
export function mulNumbers(num1, num2){
    if (validateNumbers(num1, num2)){
        return "Invalid number";    
    }
    return num1 * num2;
}
export function divNumbers(num1, num2){
    if (validateNumbers(num1, num2)){
        return "Invalid number";    
    }
    return num1 / num2;
}