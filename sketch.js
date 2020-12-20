var maze1img, body, maze2, maze2Img, maze3, maze3Img, maze4, maze4Img, box;
var boxImg, line1, line1img;

function preload() {
  maze1Img = loadImage("libraries/part1.png");
  maze2Img = loadImage("libraries/part2.png");
  maze3Img = loadImage("libraries/part3.png");
  maze4Img = loadImage("libraries/part4.png");
  boxImg = loadImage("libraries/partcenter.png");
  line1Img = loadImage("libraries/part4.png");
  pacmanbgImg = loadImage("libraries/pacmanbg.png");
  pacmanImg = loadImage("libraries/pacmanimg.png");
}
function setup() {
  createCanvas(800, 800);
  // body = createSprite(4000, 260, 10, 10);
  // body.addImage("maze1Img", maze1Img);
  // body.scale = 1.18;
  // maze2 = createSprite(240, 290, 10, 10);
  // maze2.addImage("maze3Img", maze3Img);
  // maze2.scale = 1.18;
  // maze3 = createSprite(540, 310, 10, 10);
  // maze3.addImage("maze2Img", maze2Img);
  // maze3.scale = 1.18;
  // maze4 = createSprite(400, 520, 10, 10);
  // maze4.addImage("maze1Img", maze1Img);
  // maze4.scale = 1.18;
  // box = createSprite(420, 400, 10, 10);
  // box.addImage("boxImg", boxImg);
  // box.scale = 1.3;
  // line1 = createSprite(230, 465, 10, 10);
  // line1.addImage("line1Img", line1Img);
  // line1.scale = 1.2;
  // line2 = createSprite(570, 460, 10, 10);
  // line2.addImage("line1Img", line1Img);
  // line2.scale = 1.2;
  // maze5 = createSprite(395, 640, 10, 10);
  // maze5.addImage("maze1Img", maze1Img);
  // maze5.scale = 1.18;
  maze6 = createSprite(520, 560, 100, 15);
  maze6.visible = false;
  maze7 = createSprite(265, 560, 100, 15);
  maze7.visible = false;
  maze8 = createSprite(200, 690, 250, 15);
  maze8.visible = false;
  maze8 = createSprite(600, 690, 250, 15);
  maze8.visible = false;
  maze9 = createSprite(560, 660, 15, 80);
  maze9.visible = false;
  maze10 = createSprite(230, 660, 15, 80);
  maze10.visible = false;
  maze11 = createSprite(395, 750, 780, 15);
  maze11.visible = false;
  maze12 = createSprite(395, 80, 780, 15);
  maze12.visible = false;
  maze13 = createSprite(10, 180, 15, 250);
  maze13.visible = false;
  maze14 = createSprite(780, 180, 15, 250);
  maze14.visible = false;
  maze15 = createSprite(780, 620, 15, 250);
  maze15.visible = false;
  maze16 = createSprite(10, 620, 15, 250);
  maze16.visible = false;
  maze17 = createSprite(50, 290, 200, 15);
  maze17.visible = false;
  maze18 = createSprite(730, 290, 200, 15);
  maze18.visible = false;
  maze19 = createSprite(730, 365, 200, 15);
  maze19.visible = false;
  maze20 = createSprite(50, 365, 200, 15);
  maze20.visible = false;
  maze21 = createSprite(50, 420, 200, 15);
  maze21.visible = false;
  maze22 = createSprite(50, 500, 200, 15);
  maze22.visible = false;
  maze23 = createSprite(730, 500, 200, 15);
  maze23.visible = false;
  maze24 = createSprite(730, 420, 200, 15);
  maze24.visible = false;
  maze25 = createSprite(145, 330, 15, 80);
  maze25.visible = false;
  maze26 = createSprite(635, 330, 15, 80);
  maze26.visible = false;
  maze27 = createSprite(635, 460, 15, 80);
  maze27.visible = false;
  maze28 = createSprite(145, 460, 15, 80);
  maze28.visible = false;
  maze29 = createSprite(300, 395, 15, 80);
  maze29.visible = false;
  maze30 = createSprite(480, 395, 15, 80);
  maze30.visible = false;
  maze31 = createSprite(390, 360, 200, 15);
  maze31.visible = false;
  maze32 = createSprite(390, 435, 200, 15);
  maze32.visible = false;
  maze33 = createSprite(392.5, 620, 190, 20);
  maze33.visible = false;
  maze34 = createSprite(392.5, 230, 190, 20);
  maze34.visible = false;
  maze35 = createSprite(392.5, 660, 20, 90);
  maze35.visible = false;
  maze36 = createSprite(392.5, 260, 20, 80);
  maze36.visible = false;
  maze37 = createSprite(225, 295, 20, 140);
  maze37.visible = false;
  maze38 = createSprite(560, 295, 20, 140);
  maze38.visible = false;
  maze39 = createSprite(560, 465, 20, 85);
  maze39.visible = false;
  maze401 = createSprite(225, 465, 20, 85);
  maze401.visible = false;
  maze40 = createSprite(392.5, 490, 190, 20);
  maze40.visible = false;
  maze41 = createSprite(392.5, 520, 20, 80);
  maze41.visible = false;
  maze42 = createSprite(110, 150, 80, 45);
  maze42.visible = false;
  maze43 = createSprite(675, 150, 80, 45);
  maze43.visible = false;
  maze44 = createSprite(515, 150, 120, 45);
  maze44.visible = false;
  maze45 = createSprite(265, 150, 120, 45);
  maze45.visible = false;
  maze46 = createSprite(30, 620, 67, 20);
  maze46.visible = false;
  maze47 = createSprite(750, 620, 67, 20);
  maze47.visible = false;
  maze48 = createSprite(110, 230, 80, 20);
  maze48.visible = false;
  maze49 = createSprite(675, 230, 80, 20);
  maze49.visible = false;
  maze50 = createSprite(392.5, 120, 20, 100);
  maze50.visible = false;
  maze51 = createSprite(265, 295, 100, 20);
  maze51.visible = false;
  maze52 = createSprite(515, 295, 100, 20);
  maze52.visible = false;
  maze53 = createSprite(112.5, 560, 80, 20);
  maze53.visible = false;
  maze54 = createSprite(672.5, 560, 80, 20);
  maze54.visible = false;
  maze55 = createSprite(645, 590, 20, 80);
  maze55.visible = false;
  maze56 = createSprite(140, 590, 20, 80);
  maze56.visible = false;

  pacman = createSprite(395, 470, 10, 10);
  //pacman.debug = true;
  pacman.setCollider("circle", 0, 0, 190);
  pacman.shapeColor = "red";
  pacman.addImage("pacmanImg", pacmanImg);
  pacman.scale = 0.1;
}
function draw() {
  background(pacmanbgImg);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  drawSprites();
  if (keyDown(RIGHT_ARROW)) {
    pacman.velocityX = 4;
    pacman.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    pacman.velocityX = -4;
    pacman.velocityY = 0;
  }
  if (keyDown(UP_ARROW)) {
    pacman.velocityY = -4;
    pacman.velocityX = 0;
  }
  if (keyDown(DOWN_ARROW)) {
    pacman.velocityY = 4;
    pacman.velocityX = 0;
  }
  pacman.bounceOff(maze6);
  pacman.bounceOff(maze7);
  pacman.bounceOff(maze8);
  pacman.bounceOff(maze9);
  pacman.bounceOff(maze10);
  pacman.bounceOff(maze11);
  pacman.bounceOff(maze12);
  pacman.bounceOff(maze13);
  pacman.bounceOff(maze14);
  pacman.bounceOff(maze15);
  pacman.bounceOff(maze16);
  pacman.bounceOff(maze17);
  pacman.bounceOff(maze18);
  pacman.bounceOff(maze19);
  pacman.bounceOff(maze20);
  pacman.bounceOff(maze21);
  pacman.bounceOff(maze22);
  pacman.bounceOff(maze23);
  pacman.bounceOff(maze24);
  pacman.bounceOff(maze25);
  pacman.bounceOff(maze26);
  pacman.bounceOff(maze27);
  pacman.bounceOff(maze28);
  pacman.bounceOff(maze29);
  pacman.bounceOff(maze30);
  pacman.bounceOff(maze31);
  pacman.bounceOff(maze32);
  pacman.bounceOff(maze34);
  pacman.bounceOff(maze35);
  pacman.bounceOff(maze36);
  pacman.bounceOff(maze37);
  pacman.bounceOff(maze38);
  pacman.bounceOff(maze39);
  pacman.bounceOff(maze40);
  pacman.bounceOff(maze41);
  pacman.bounceOff(maze42);
  pacman.bounceOff(maze43);
  pacman.bounceOff(maze44);
  pacman.bounceOff(maze45);
  pacman.bounceOff(maze46);
  pacman.bounceOff(maze47);
  pacman.bounceOff(maze48);
  pacman.bounceOff(maze49);
  pacman.bounceOff(maze50);
  pacman.bounceOff(maze51);
  pacman.bounceOff(maze52);
  pacman.bounceOff(maze53);
  pacman.bounceOff(maze54);
  pacman.bounceOff(maze55);
  pacman.bounceOff(maze56);
  pacman.bounceOff(maze401);
}
