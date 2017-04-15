var canvas;

var state;
var api = 'https://api.census.gov/data/2015/acs1/profile';
var apiKey = '?key=9df29ce2a585089df6961f0f534d063842a4651b';
var units = '&get=NAME,DP03_0005PE,DP03_0062E,DP03_0128PE,DP02_0066PE,DP02_0064PM,DP02_0065M,DP05_0001PE,DP02_0092E&for=state:';
var input;

var statsText;

function setup() {
    const canvasHolder = select('#canvasHolder'),
        canvasWidth  = canvasHolder.width,
        canvasHeight = canvasHolder.height;
  
  console.log(canvasHolder);
  print(canvasWidth + ', ' + canvasHeight);
 
  createCanvas(canvasWidth, canvasHeight).parent('canvasHolder');
  
  // myCanvas = createCanvas(800, 500);
  // canvas.parent('canvasHolder');
  colorMode(HSB);

  var button = select('#submit');
  button.mousePressed(stateAsk);

  input = select('#city');

}

function stateAsk() {
  var url = api + apiKey + units + input.value();
  loadJSON(url, gotData);
}

function gotData(data) {
  state = data;
}

function draw() {

  if (state) {
    var name = state[1][0];
    var unemployed = state[1][1];
    var income = state[1][2];
    var pov = state[1][3];
    var hs = state[1][4];
    var bach = state[1][5];
    var grad = state[1][6];
    var pop = state[1][7];
    var foreign = state[1][8];
    var id = state[1][9];
    // var nameText = ' state: ';
    // var popText = ' | population: ';
    // var employedText = ' | population employed: ';
    // var schoolText = ' | population currently in school: ';
    // var noHealthText = ' | population without health insurance: ';
    // var bachText = ' | % with bachelors degree: ';
    // var povText = ' | % of families in poverty: ';
    // var incomeText = ' | average household income: ';
    // var rentText = ' | median rent: ';
    // var homeText = ' | median home value: ';

    // var scrolling = nameText + name + popText + pop + employedText + employed + schoolText + school + noHealthText + noHealth + bachText + bach + povText + pov + incomeText + income + rentText + rent + homeText + home;
    // var statsText = createP(scrolling);
    // statsText.parent("stats");

  background(pop/70000,foreign/1000,foreign/1000);

      noStroke();
      fill(100);
      rect(0,0,width/2,height);
  //   if ((pop < 6000000) && (pop > 2000000)) {
  //     noStroke();
  //     fill(360-home/1000,pov,100);
  //     triangle(0, employed/25000, 0, height-employed/25000, pop/15000, height/2);
  //   } else if (pop < 2000000){
  //     noStroke();
  //     fill(360-home/1000,pov,100);
  //     rect(0,0,pop/5000,employed/5000);
  //   }

  //   if (foreign > 1000000){
  //     var x = 0;
  //     for (x = 0; x <= noHealth/10000; x += school/400000) {
  //       for (y = 0; y <= foreign/18000; y += school/400000) {
  //         fill(360-home/1000,pov,100);
  //         ellipse(x, y+noHealth/20000, 5, 5);
  //       }
  //     }
  //   } else if (foreign > 500000){
  //     var x = 0;
  //     for (x = 0; x <= noHealth/5000; x += school/200000) {
  //       for (y = 0; y <= foreign/10000; y += school/200000) {
  //         fill(360-home/1000,pov,100);
  //         rect(x+width-noHealth/5000*2, y, 10, 3);
  //       }
  //     }
  //   } else {
  //     var x = 0;
  //     for (x = 0; x <= noHealth/1000; x += school/18000) {
  //       for (y = 0; y <= foreign/1000; y += school/18000) {
  //         fill(360-home/1000,pov,100);
  //         rect(x+width-noHealth/1000, y+foreign/1000, 7, 7);
  //       }
  //     }
  //   }

  //   if (home > 300000) {
  //     noFill();
  //     stroke(360-rent/10-id,100,100-bach-pov);
  //     strokeWeight(pov);
  //     ellipse(pov*30,pov*20,home/1000,home/1000);
  //   } else {
  //     stroke(360-home/1000-rent/10,100,100-pov);
  //     strokeWeight(pov);
  //     fill(360-rent/10-id,100,100-bach-pov);
  //     ellipse(pov*30,pov*20,home/1000,home/1000);
  //   }

  //   if (pop > 6000000) {
  //     noStroke();
  //     fill(360-home/1000,pov,100);
  //     star(employed/55000, pop/100000, 30, 70, 7); 
  //   }

    noStroke();
    fill(255);
    text(name,width/2,height/2);
    rect(0,0,50,50);

  // }

  // function star( x,  y,  radius1,  radius2,  npoints) {
  //   var angle = TWO_PI / npoints;
  //   var halfAngle = angle/2.0;
  //   beginShape();
  //   for (var a = 0; a < TWO_PI; a += angle) {
  //     var sx = x + cos(a) * radius2;
  //     var sy = y + sin(a) * radius2;
  //     vertex(sx, sy);
  //     sx = x + cos(a+halfAngle) * radius1;
  //     sy = y + sin(a+halfAngle) * radius1;
  //     vertex(sx, sy);
  //   }
    endShape(CLOSE);
  }
}








