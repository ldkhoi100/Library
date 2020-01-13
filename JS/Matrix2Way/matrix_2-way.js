// Mảng 2 chiều random từ 10 đến 200
function GenerateMatrix(row, col){
    let matrix = new Array(row);
    for(let i=0; i< row; i++){
        let arr = new Array(col);
        for(let j = 0; j< col; j++){
            arr[j] = Math.floor(Math.random() * 191 + 10);
        }
        matrix[i] = arr;
    }
    return matrix;
}
// Hiển thị ma trận
function ShowMatrix(row, col, matrix){
    let str =""
    for(let i=0; i< row; i++){
        str = str + "<tr>";
        for(let j = 0; j< col; j++){
            str = str + "<td>" + matrix[i][j] + "</td>";
        }
        str = str + "</tr>";
    }
    return str;
}