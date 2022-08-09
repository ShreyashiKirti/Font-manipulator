function setup(){
video= createCapture(VIDEO);
video.size(500,400);
video.position(10,150)

canvas= createCanvas(600,389);
canvas.position(550,150);

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Model is loaded');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
}
}

function draw(){
background('#427d64');
}