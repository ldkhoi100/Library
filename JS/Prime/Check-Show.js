//Kiểm tra số nguyên tố
function IsPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

// Hiển thị số nguyên tố
function showPrime(num){
    let count = 0;
    let number = 2;
    while(count<num){
        if(isNgTo(number)){
            document.write(number + " ");
            count++;
        }
        number++;
    }
}