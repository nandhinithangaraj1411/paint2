var database;
drawing=[];

var ref;
 function setup(){
   database=firebase.database();
   console.log(database)
   ref=database.ref('drawing')
   createCanvas(800,400)
   ref=ref.on("value",readPosition,showError)

}
function draw(){
  background("skyblue");
 
  strokeWeight(4);
  stroke(255);
  noFill();
  beginShape();
  for(i=0;i<drawing.length;i++){
     vertex(drawing[i].x,drawing[i].y)

  }
  endShape();

}
function mouseDragged(){
   var point={
    x: mouseX,
    y: mouseY,
  }
  drawing.push(point);
  database.ref('drawing').set({
    'd':drawing
  })
}
function readPosition(data){
  drawing=data.val().d
}
function showError(){
  console.log("errorOccured")
}
