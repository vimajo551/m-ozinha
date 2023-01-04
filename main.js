var getNoseX
var getNoseY
var getHat

function preload(){
    getHat = loadImage("https://i.postimg.cc/kXvQ35V7/addams-family-hand-potresize-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(550,450)
    canvas.position(712,150)
    video = createCapture(VIDEO)
    video.hide()
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        getNoseX=results[0].pose.nose.x-125
        getNoseY=results[0].pose.nose.y-250
    }
}

function modelLoaded(){
    console.log("modelo carregado")
}

function draw(){
    image(video,0,0,550,450)
    image(getHat,getNoseX,getNoseY,200,200)
}