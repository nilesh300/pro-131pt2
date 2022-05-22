img = "";

function preload() {
    img = loadImage('laptop1.png');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("laptop", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}