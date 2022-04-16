leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600 , 650);
    video.position(100 , 150);

    canvas = createCanvas(550 , 550);
    canvas.position(900 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('grey');
    document.getElementById("font_size").innerHTML = "Font Size of Text will be " + difference + "px";
    fill('blue');
    textSize(difference);
    text('Schyler' , 50 , 400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX = " + leftwristX + "   rightwristX = " + rightwristX + "  difference = " + difference);
    }
}

