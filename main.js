function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses)
}

function ModelLoaded() {
   console.log("Model Loaded");
}

function draw() {
    background("#f2e6ff")
}

function gotPoses() {
   if (results.length > 0) {
    console.log(results)
   } 
}