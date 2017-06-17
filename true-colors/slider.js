var canvas;

var pdf;

var state;
var api = 'https://api.census.gov/data/2015/acs1/profile';
var apiKey = '?key=9df29ce2a585089df6961f0f534d063842a4651b';
var units = '&get=NAME,DP05_0001PE,DP02_0092PE,DP04_0134E,DP04_0003PE,DP04_0089E,DP04_0046PE,DP03_0062E,DP03_0070PE,DP03_0005PE,DP03_0099PE,DP03_0128PE,DP02_0066PE,DP02_0062PE,DP02_0064PE,DP02_0065PE&for=state:';
var input;

var statsText;

function setup() {
  const canvasHolder = select('#canvasHolder'),
  canvasWidth  = canvasHolder.width,
  canvasHeight = canvasHolder.height;
  
  console.log(canvasHolder);
  print(canvasWidth + ', ' + canvasHeight);

// use this code on the web
  createCanvas(canvasWidth, canvasHeight).parent('canvasHolder');

// use this code when exporting
  // createCanvas(canvasWidth, canvasHeight, SVG);
  
  pdf = createPDF();
  pdf.beginRecord();
  
  // myCanvas = createCanvas(800, 500);
  // canvas.parent('canvasHolder');
  colorMode(HSB);

  var button = select('#submit');
  button.mousePressed(stateAsk);

  input = select('#city');

  // bgHSlider = createSlider(0, 359, 0);
  // bgHSlider.position(30, 100);
  // bgBSlider = createSlider(0, 100, 50);
  // bgBSlider.position(30, 120);

  strHSlider = createSlider(0, 359, 0);
  strHSlider.position(30, 160);
  strBSlider = createSlider(0, 100, 50);
  strBSlider.position(30, 180);

  strLSlider = createSlider(0, height*2, height/2);
  strLSlider.position(30, 200);

  strOSlider = createSlider(100000, 500000, 100000);
  strOSlider.position(30, 220);

  strWSlider = createSlider(1, height/2, 50);
  strWSlider.position(30, 240);

  // shaHSlider = createSlider(0, 359, 0);
  // shaHSlider.position(30, 280);
  // shaBSlider = createSlider(0, 100, 50);
  // shaBSlider.position(30, 300);

  // shaSSlider = createSlider(42019, 75847, 42019);
  // shaSSlider.position(30, 320);

  // shaTSlider = createSlider(93.4, 100, 93.4);
  // shaTSlider.position(30, 340);

  // shaSiSlider = createSlider(10, 500, 100);
  // shaSiSlider.position(30, 360);

  // shaXSlider = createSlider(0, width, width/2);
  // shaXSlider.position(30, 380);

  // shaYSlider = createSlider(0, height, height/2);
  // shaYSlider.position(30, 400);

  // staHSlider = createSlider(0, 359, 0);
  // staHSlider.position(30, 440);
  // staBSlider = createSlider(0, 100, 0);
  // staBSlider.position(30, 460);

  // staLSlider = createSlider(7.5, 27.5, 7.5);
  // staLSlider.position(30, 480);

  // staHSSlider = createSlider(82.2, 93.5, 93);
  // staHSSlider.position(30, 500);

  // staBASlider = createSlider(11.5, 25, 11.5);
  // staBASlider.position(30, 520);

  // staGSlider = createSlider(7.7, 32.9, 7.7);
  // staGSlider.position(30, 540);
}

function stateAsk() {
  var url = api + apiKey + units + input.value();
  loadJSON(url, gotData);
}


function draw() {

  // sliders
  // var bgH = bgHSlider.value();
  // var bgB = bgBSlider.value();

  var strH = strHSlider.value();
  var strB = strBSlider.value();

  var strL = strLSlider.value();
  var strO = strOSlider.value();
  var strW = strWSlider.value();

  // var shaH = shaHSlider.value();
  // var shaB = shaBSlider.value();

  // var shaS = shaSSlider.value();
  // var shaT = shaTSlider.value();

  // var shaSi = shaSiSlider.value();

  // var shaX = shaXSlider.value();
  // var shaY = shaYSlider.value();

  // var staH = staHSlider.value();
  // var staB = staBSlider.value();

  // var staL = staLSlider.value();

  // var staHS = staHSSlider.value();
  // var staBA = staBASlider.value();
  // var staG = staGSlider.value();

// background
  // background(bgH, 100, bgB);
  background(0, 0, 74);

// stripe
  noFill();
  stroke(strH, 100, strB);
  strokeWeight(strW);
  strokeCap(PROJECT);
  if(strO < 178600) { 
    line(0,strL,width,strL);
  } else if ((strO < 339300) && (strO > 178600)){
   translate(strL,0);
   line((-width-width),height*2,(width*2-width),-height);
   translate(-strL,0);
 } else { 
  line(strL,0,strL,height);
}

// shape

    // if (shaS > 53889) {
    //   noStroke();
    //   fill(shaH, 100, shaB);
    // } else {
    //   noFill();
    //   strokeWeight(30);
    //   strokeCap(PROJECT);
    //   stroke(shaH, 100, shaB);
    // } 

    // if(shaT > 96.3) { 
    //   polygon(shaX,shaY,shaSi, 4); 
    // } else {
    //   ellipse(shaX,shaY,shaSi,shaSi);
    // } 

// star
  // noStroke();
  // fill(staH, 100, staB);
  // if ((staL > 16.9 ) && (staL < 21.1 )) {
  //     translate(85, 85);
  //   } else if ((staL > 21.1 ) && (staL < 24.3 )) {
  //     translate(width-85, 85);
  //   } else if (staL > 24.3 ) {
  //     translate(width-85, height-85);
  //   }  else {
  //    translate(85, height-85);
  //  }
  //   if ((staHS > 86.7) && (staBA < 18.5)) {
  //   rotate(PI/-2.0);
  //   star(0, 0, 18, 39, 4); 
  // } else if ((staBA > 18.5) && (staG < 11.2)) {
  //   rotate(PI/-2.0);
  //   star(0, 0, 18, 39, 5); 
  // } else if (staG > 11.2) {
  //   rotate(PI/-2.0);
  //   star(0, 0, 18, 39, 6); 
  // }


  

  function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);

    }
    endShape(CLOSE);
  }

  function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a+halfAngle) * radius1;
      sy = y + sin(a+halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

}







