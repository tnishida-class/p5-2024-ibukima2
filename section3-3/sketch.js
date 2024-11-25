// テキスト「キーボード操作に反応する」
let x, y, vy
const g = 1;
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = (height - height / 3) - 25;
  ground = height - height / 3;


  
  
}

function draw(){
  background(160, 192, 255);
  fill(102, 204, 0)
  quad(0, ground, 0, height, width, height, width, ground)
  fill(255)
  ellipse(x, y , 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if((keyIsDown("Z".charCodeAt(0))) && (keyIsDown(LEFT_ARROW))){ x -= 7.5; }
  if((keyIsDown("Z".charCodeAt(0))) && (keyIsDown(RIGHT_ARROW))){ x += 7.5; }
  if((keyIsDown(" ".charCodeAt(0))) && (y >= ground - 100 )){ y -= 10; }
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
