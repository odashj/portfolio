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

    var pop = state[1][1];
    var foreign = state[1][2];

    var rent = state[1][3];
    var vacant = state[1][4];
    var homeValue = state[1][5];
    var homeOwners = state[1][6];

    var income = state[1][7];
    var security = state[1][8];
    var unemployed = state[1][9]; 
    var noHealth = state[1][10];;
    var pov = state[1][11];

    var hs = state[1][12];
    var someCollege = state[1][13];
    var bach = state[1][14];
    var grad = state[1][15];

    var id = state[1][15];

    var employed = (100 - unemployed); 
    var notPov = (100 - pov);
    var notVacant = (100 - vacant);
    var health = (100 - noHealth);
    var notSecurity = (100 - security);

    var popNorm = (pop - 586107)*(359/(39144818 - 586107));
    var foreignNorm = ((foreign - .5)*15);

    var rentNorm = (rent - 675)*(359/(1500 - 675));
    var vacantNorm = ((notVacant - 74.8)*5.7471264368); 

    var homeValueNormH = (homeValue - 100000)*(650/(500000 - 100000));
    var homeValueNormW = (homeValue - 100000)*(650/(500000 - 100000));

    var homeOwnersNormH = (homeOwners - 30)*(500/(75 - 30));
    var homeOwnersNormW = (homeOwners - 30)*(700/(75 - 30));
    var homeOwnersNormD = (homeOwners - 30)*((350+width)/(75 - 30));

    var incomeNorm = (income - 42019)*(359/(75847 - 42019));
    var notPovNorm = (notPov - 79.6)*(100/(91.8 - 79.6));


    var employedNorm = (employed - 93.4)*(290/(100 - 93.4));

    var healthNorm = (health - 79.1)*(655/(97.2 - 79.1));
    var notSecurityNorm = (notSecurity - 86.4)*(500/(97 - 86.4));

    var hsNormC = (hs - 82.2)*(359/(93.5 - 82.2)); 
    var hsNormL = ((hs - 82.2)*350/(93.5-82.2));  
    var someCollegeNorm = (someCollege - 7.5)*(1.7/(27.5 - 7.5));
    var bachNormC = (bach - 11.5)*(100/(25 - 11.5));  
    var bachNormL = (bach - 11.7)*(350/(24.8 - 11.7));  
    var gradNorm = (grad - 7.7)*(360/(32.9 - 7.7));
    var gradNormL = (grad - 6.5)*(350/(32.9 - 6.5));
    

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

    background(popNorm,100,foreignNorm);

    if(homeValue < 178600) { 
      noFill();
      stroke(rentNorm,100,vacantNorm);
      strokeWeight(homeValueNormW);
      strokeCap(PROJECT);
      line(0,homeOwnersNormH,width,homeOwnersNormH);
    } else if ((homeValue < 339300) && (homeValue > 178600)){
      noFill();
      stroke(rentNorm,100,vacantNorm);
      strokeWeight(homeValueNormH);
      strokeCap(PROJECT);
      translate(homeOwnersNormD,0);
      line((-width-width),height*2,(width*2-width),-height);
      translate(-homeOwnersNormD,0);
    } else { 
      noFill();
      stroke(rentNorm,100,vacantNorm);
      strokeWeight(homeValueNormW);
      strokeCap(PROJECT);
      line(homeOwnersNormW,0,homeOwnersNormW,height);
    }


    noStroke();

    if (income > 53889) {
      noStroke();
      fill(incomeNorm,100,notPovNorm);
    } else {
      noFill();
      strokeWeight(30);
      strokeCap(PROJECT);
      stroke(incomeNorm,100,notPovNorm);
    }

    if(unemployed < 3.7) { 
      polygon(healthNorm,notSecurityNorm-employedNorm, employedNorm, 4); 
    } else {
      ellipse(healthNorm,notSecurityNorm-employedNorm,employedNorm*2,employedNorm*2);
    } 

    if ((someCollege > 16.9 ) && (someCollege < 21.1 )) {
      translate(85, 85);
    } else if ((someCollege > 21.1 ) && (someCollege < 24.3 )) {
      translate(width-85, 85);
    } else if (someCollege > 24.3 ) {
      translate(width-85, height-85);
    }  else {
     translate(85, height-85);
   }
   noStroke();
   fill(hsNormC,100,bachNormC);
   if ((hs > 86.7) && (bach < 18.5)) {
    rotate(PI/-2.0);
    star(0, 0, 18, 39, 4); 
  } else if ((bach > 18.5) && (grad < 11.2)) {
    rotate(PI/-2.0);
    star(0, 0, 18, 39, 5); 
  } else if (grad > 11.2) {
    rotate(PI/-2.0);
    star(0, 0, 18, 39, 6); 
  }

    // noStroke();
    // fill(255);
    // resetMatrix();      
    // text(name,width/2,height/2);

  }

  

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

function keyPressed() {
  if (keyPressed) {
    if (key == 'S' || key == 's')
      save();
  }
}





