  var letterA;
  var letterB;  
  var letterC;  
  var letterD;
  var letterE;
  var letterF;
  var letterG;
  var letterH;
  var letterI;
  var letterJ;
  var letterK;
  var letterL;
  var letterM;
  var letterN;
  var letterO;
  var letterP;
  var letterQ;
  var letterR;
  var letterS;
  var letterT;
  var letterU;
  var letterV;
  var letterW;
  var letterX;
  var letterY;
  var letterZ;
  var letterSpace;

  var r;

  var a,b;


function setup() {
  noLoop();
  var myCanvas = createCanvas(screen.width, screen.height);
  myCanvas.parent('myContainer');

  background(230,230,220);

  myFont = loadFont('SourceCodePro-Medium.ttf');

  letterA = loadImage("a.png");
  letterB = loadImage("b.png");
  letterC = loadImage("c.png");
  letterD = loadImage("d.png");
  letterE = loadImage("e.png");
  letterF = loadImage("f.png");
  letterG = loadImage("g.png");
  letterH = loadImage("h.png");
  letterI = loadImage("i.png");
  letterJ = loadImage("j.png");
  letterK = loadImage("k.png");
  letterL = loadImage("l.png");
  letterM = loadImage("m.png");
  letterN = loadImage("n.png");
  letterM = loadImage("m.png");
  letterN = loadImage("n.png");
  letterO = loadImage("o.png");
  letterP = loadImage("p.png");
  letterQ = loadImage("q.png");
  letterR = loadImage("r.png");
  letterS = loadImage("s.png");
  letterT = loadImage("t.png");
  letterU = loadImage("u.png");
  letterV = loadImage("v.png");
  letterW = loadImage("w.png");
  letterX = loadImage("x.png");
  letterY = loadImage("y.png");
  letterZ = loadImage("z.png");
  letterSpace = loadImage("space.png");
  loop();

  r = 0;
  a = 0;
  b = 0;

}

function draw() {

  r = int(random(radians(0),radians(360)));
  a = int(random(-20, 1010));
  b = int(random(-10, 510));



}

function keyPressed() {

      if (keyPressed) {
        push();
       translate(width/2, height/2);
       rotate(r);
       translate(-width/2, -height/2);
     }

  if (key == 'a' || key == 'A')
      image(letterA, a, b);

    if (key == 'b' || key == 'B')
      image(letterB, a, b);

    if (key == 'c' || key == 'C')
      image(letterC, a, b);

    if (key == 'd' || key == 'D')
      image(letterD, a, b);

     if (key == 'e' || key == 'E')
      image(letterE, a, b);

    if (key == 'f' || key == 'F')
      image(letterF, a, b);

    if (key == 'g' || key == 'G')
      image(letterG, a, b);

    if (key == 'h' || key == 'H')
      image(letterH, a, b);

    if (key == 'i' || key == 'I')
      image(letterI, a, b);

    if (key == 'j' || key == 'J')
      image(letterJ, a, b);

    if (key == 'k' || key == 'K')
      image(letterK, a, b);

    if (key == 'l' || key == 'L')
      image(letterL, a, b);

    if (key == 'm' || key == 'M')
      image(letterM, a, b);

    if (key == 'n' || key == 'N')
      image(letterN, a, b);

    if (key == 'o' || key == 'O')
      image(letterO, a, b);

    if (key == 'p' || key == 'P')
      image(letterP, a, b);

    if (key == 'q' || key == 'Q')
      image(letterQ, a, b);

    if (key == 'r' || key == 'R')
      image(letterR, b, r);

    if (key == 's' || key == 'S')
      image(letterS, a, b);

    if (key == 't' || key == 'T')
      image(letterT, a, b);

    if (key == 'u' || key == 'U')
      image(letterU, a, b);

    if (key == 'v' || key == 'V')
      image(letterV, a, b);

    if (key == 'w' || key == 'W')
      image(letterW, a, b);

    if (key == 'x' || key == 'X')
      image(letterX, a, b);

    if (key == 'y' || key == 'Y')
      image(letterY, a, b);

    if (key == 'z' || key == 'Z')
      image(letterZ, a, b);

    if (key == ' ') 
      image(letterSpace, a, b);

  
    pop();

    

}


  function mousePressed () {
    if (mousePressed)
  background(230,230,220);


}









































