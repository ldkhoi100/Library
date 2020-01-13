function IsValidNumber(num){
    num = parseInt(num);
    return !isNaN(num) && Number.isInteger(num) && num >= 10 && num <= 15;
}