nosex = 0
nosey = 0
function preload() {
    nose = loadImage("pngwing.com.png")
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotposes)
}
function modelLoaded() {
    console.log("PosseNet foi iniciado")
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x-100
        nosey = results[0].pose.nose.y-200
    }
}
function draw(){
    image(video, 0, 0, 300, 300)
    image(nose, nosex, nosey, 200, 200)
}
function TakeSnapshot(){
    save("Imagem.png")
}