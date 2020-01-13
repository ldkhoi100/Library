// Yêu cầu nhập độ dài của mảng or bất kỳ
function inputLength(){
    do{
    num = prompt(" ");
    }while(isNaN(num) || parseInt(num)!=num || num == ''|| num<0);
    return num;
}