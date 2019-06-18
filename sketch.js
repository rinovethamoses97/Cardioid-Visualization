let radius=240;
let totalPoints;
let offAngle;
let factor;
let sliderP;
function setup(){
    createCanvas(500,500);
    sliderP=createSlider(0,200,0,1);
    sliderF=createSlider(0,200,2,1);
}
function draw(){
    background(0);
    totalPoints=sliderP.value();
    offAngle=360/totalPoints;
    factor=sliderF.value();
    stroke(255);
    noFill();
    ellipse(width/2,height/2,radius*2);
    let angle=180;
    angleMode(DEGREES);
    for(var i=0;i<totalPoints;i++){
        let x=radius*cos(angle);
        let y=radius*sin(angle);
        stroke(255);
        fill(255);
        ellipse(x+width/2,y+height/2,5);
        angle-=offAngle;
        let tx=radius*cos(180-(offAngle*((i*factor)%totalPoints)));
        let ty=radius*sin(180-(offAngle*((i*factor)%totalPoints)));
        stroke(255);
        line(x+width/2,y+height/2,tx+width/2,ty+height/2);
    }
}
