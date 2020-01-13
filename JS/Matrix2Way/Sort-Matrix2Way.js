//Sắp xếp mảng 2 chiều
function Sort(row, col, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].sort(function(a, b) {
        return a - b;
        });
    }
    let newArr= [];
    for(let i=0;i<col;i++){
        newArr[i]=[];
    }
    for(let i=0 ; i<col ; i++){
        for(let j=0 ; j<row ; j++){
            newArr[i][j]=matrix[j][i];
        }
    }
    //sort
    for(let i=0;i<col;i++){
        newArr[i].sort(function(a,b){
            return a-b;
        });
    }
    //change & show
    let show2="<table>";
    for(let i=0 ; i<row ; i++){
        show2+="<tr>";
        for(let j=0 ; j<col ; j++){
            matrix[i][j]=newArr[j][i];
            show2+="<td>"+matrix[i][j]+"</td>";
        }
        show2+="</tr>";
    }
    return show2;
}