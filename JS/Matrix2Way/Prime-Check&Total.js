//Kiểm tra số nguyên tố
function IsPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
// Tổng số nguyên tố mảng 2 chiều
function TotalPrime(row, col, matrix){
    let total = 0;
    for(let i=1; i< row; i++){
        for(let j = 1; j< col; j++){
            if(IsPrime(matrix[i][j]))
                total = total + 1;
        }
    }
    return total;
}