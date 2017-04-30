var canvas;

var state;
var api = 'https://api.census.gov/data/2015/acs1/profile';
var apiKey = '?key=9df29ce2a585089df6961f0f534d063842a4651b';
var units = '&get=NAME,DP05_0001PE,DP02_0092PE,DP04_0134E,DP04_0003PE,DP04_0089E,DP04_0046PE,DP03_0062E,DP03_0070PE,DP03_0005PE,DP03_0099PE,DP03_0128PE,DP02_0066PE,DP02_0064PE,DP02_0065PE&for=state:';
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
    var bach = state[1][13];
    var grad = state[1][14];;

    var id = state[1][15];
    // var grad = state[1][6];

    // var noHealth = state[1][10];
    // var someCollege = state[1][11];

    var employed = (100 - unemployed); 
    var notPov = (100 - pov);
    var notVacant = (100 - vacant);
    var health = (100 - noHealth);
    var notSecurity = (100 - security);

    var popNorm = ((pop - 586107)*0.00001);
    var foreignNorm = ((foreign - .5)*15);

    var rentNorm = ((rent - 675)*0.4363636364);
    var vacantNorm = ((notVacant - 74.8)*5.7471264368); 

    var homeValueNormH = (homeValue - 100000)*(650/(500000 - 100000));
    var homeValueNormW = (homeValue - 100000)*(650/(500000 - 100000));

    var homeOwnersNormH = (homeOwners - 30)*(500/(75 - 30));
    var homeOwnersNormW = (homeOwners - 30)*(700/(75 - 30));
    var homeOwnersNormD = (homeOwners - 30)*((350+width)/(75 - 30));

    var incomeNorm = (income - 42019)*(360/(75847 - 42019));
    var notPovNorm = (notPov - 79.6)*(100/(91.8 - 79.6));


    var employedNorm = (employed - 94.3)*(320/(100 - 94.3));

    var healthNorm = (health - 79.6)*(655/(97.2 - 79.6));
    var notSecurityNorm = (notSecurity - 87.5)*(500/(97 - 87.5));

    var hsNorm = ((hs - 82.2)*33.0275229358);  
    var bachNorm = ((bach - 11.7)*7.6335877863);  
    

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
        // rect(0,homeOwnersNormH-homeValueNormH,width,homeValueNormH);
        line(0,homeOwnersNormH,width,homeOwnersNormH);
    } else if ((homeValue < 339300) && (homeValue > 178600)){
        // noFill();
        // stroke(rentNorm,100,vacantNorm);
        // strokeWeight(homeValueNormH);
        // strokeCap(PROJECT);
        // line(0,height-homeOwnersNormD,width,0+homeOwnersNormD);
        noFill();
        stroke(rentNorm,100,vacantNorm);
        strokeWeight(homeValueNormH);
        strokeCap(PROJECT);
        translate(homeOwnersNormD,0);
        line((-width-width),height*2,(width*2-width),-height);
        translate(-homeOwnersNormD,0);
        // line(0,height-homeOwnersNormD,width,0+homeOwnersNormD);
    } else { 
        noFill();
        stroke(rentNorm,100,vacantNorm);
        strokeWeight(homeValueNormW);
        strokeCap(PROJECT);
        line(homeOwnersNormW,0,homeOwnersNormW,height);
    }
    
    noStroke();

     noStroke();

    if (income > 53889) {
      noStroke();
      fill(incomeNorm,100,notPovNorm);
    } else {
      noFill();
      strokeWeight(27);
      strokeCap(PROJECT);
      stroke(incomeNorm,100,notPovNorm);
    }

    if(unemployed < 3.7) { 
      polygon(healthNorm,notSecurityNorm-employedNorm, employedNorm, 4); 
    } else {
      ellipse(healthNorm,notSecurityNorm-employedNorm,employedNorm*2,employedNorm*2);
   } 

 
  noStroke();
  fill(255);
  text(name,width/2,height/2);

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
 
}








