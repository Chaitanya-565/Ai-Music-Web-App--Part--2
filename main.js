Brijesh_shandiliya_song=""

function setup(){ 

    canvas = createCanvas(600,530);

    canvas.center();

    video = createCapture(VIDEO);

    video.hide();
}

function preload(){

    Brijesh_shandiliya_song = loadSound("https://gaana.com/song/sulthan-6");

}

function draw(){

    image(video,0,0,600,530);
    
}