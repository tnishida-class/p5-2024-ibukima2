// 最終課題を制作しよう

let squares = []; // 四角形の情報を保存する配列
let size; // 四角形のサイズ
const colors = []; // 色の配列

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = width / 16; // 四角形のサイズを計算

  // colors 配列に色を定義
  colors.push(color(0, 255, 0));  // green
  colors.push(color(255, 0, 0));  // red
  colors.push(color(0, 0, 255));  // blue
  colors.push(color(255, 255, 0)); // yellow
  colors.push(color(255));        // white

  initSquares(); // 四角形の初期化
}

function draw() {
  background(255); // 背景をリセット

  // 四角形を描画
  for (let square of squares) {
    fill(colors[square.colorIndex]);
    rect(square.x, square.y, square.size, square.size);
  }

  balloon("リセット", size*2, size*14.5)
  text("クリックで色を変えられます", size*2, size + textAscent() + textDescent());
}

function initSquares() {
  // 四角形の情報を配列に保存
  squares = [];
  for (let i = 2; i < 14; i++) {
    for (let j = 2; j < 14; j++) {
      let x = size * i;
      let y = size * j;
      squares.push({
        x: x, 
        y: y, 
        size: size, 
        colorIndex: 0
      });
    }
  }
}

function mousePressed() {
  // マウスクリック位置を判定し、色を変更
  for (let square of squares) {
    if (
      mouseX > square.x &&
      mouseX < square.x + square.size &&
      mouseY > square.y &&
      mouseY < square.y + square.size
    ) {
      // 次の色に変更
      square.colorIndex = (square.colorIndex + 1) % colors.length;
      break; // 一つの四角形だけ変更   
  }
  }

  let w = textWidth("リセット");
  let h = textAscent() + textDescent();
  let p = 2;
  if(
    mouseX > size*2 &&
    mouseX < size*2 + w + p * 2 &&
    mouseY > size*14.5 &&
    mouseY < size*14.5 + h + p * 2
  ) {
   initSquares();
   }
}


function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(255);
  rect(x, y, w + p * 2, h + p * 2);
  fill(0)
  text(t, x, y + h);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = width / 16; // サイズを再計算
  initSquares(); // 四角形を再生成
}