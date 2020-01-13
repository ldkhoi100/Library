// Tìm vị trí của số đã nhập ở trong mảng
function seach(arr, number) {
    if(arr === []){
        return false;
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == number) {
                return i;
            }
        }
        return -1;
    }
}