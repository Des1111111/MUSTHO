function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();

/*camera code*/

video=createCapture(VIDEO);
video.size( 300,300 );
video.hide();

/* we bring in pose net */

poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotposes);
}

function gotposes(results){

/* this line of code will make sure pose net is working */
if(results.length > 0 ){

console.log(results);
console.log("noseX="+results[0].pose.nose.x)
console.log("noseY="+results[0].pose.nose.y)
console.log("leftEyeX="+results[0].pose.leftEye.x)
console.log("leftEyeY="+results[0].pose.leftEye.y)
}

}

function modelloaded(){
console.log("model has been loaded")
}

function draw(){
/*bring in video*/

image(video,0,0,300,300);
}

function take_snapshot(){
save("Dessvin.png")
}

