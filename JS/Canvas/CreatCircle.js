<canvas id="myCanvas" width="1368px" height="768px" style="border:1px solid #d3d3d3;"></canvas>

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function createCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var circle = new Circle(500, 500, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}
    createCircle();
    // Bán kính ngẫu nhiên
    var radius = Math.floor(Math.random() * 80);

    //Màu ngẫu nhiên
    function getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    
    function getRandomColor(){
        var red = getRandomHex();
        var green = getRandomHex();
        var blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }
    var color = getRandomColor();
    ctx.fillStyle = color;