var canvas;

var state;
var api = 'https://api.census.gov/data/2016/acs/acs1/profile';
var units = '?get=NAME,DP05_0001PE,DP02_0092PE,DP04_0134E,DP04_0003PE,DP04_0089E,DP04_0046PE,DP03_0062E,DP03_0070PE,DP03_0005PE,DP03_0099PE,DP03_0128PE,DP02_0066PE,DP02_0062PE,DP02_0064PE,DP02_0065PE';
var apiKey = '&key=9df29ce2a585089df6961f0f534d063842a4651b&for=state:';

var nameStats;
var popStats;
var houseStats;
var ecoStats;

var percent;
var dollar;
// var eduStats;

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
 var url = api + units + apiKey + input;
  loadJSON(url, gotData);

}

 

function gotData(data) {
  state = data;
}

function draw() {

  if (state) {

// Data
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
    var noHealth = state[1][10];
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

    var popNorm = (pop - 585501)*(359/(39250017 - 585501));
    // var foreignNorm = ((foreign - .5)*15);

    var foreignNorm = ((foreign - 1.7)*(100/(6.5 - 1.7)));

    var rentNorm = (rent - 682)*(359/(1483 - 682));
    var vacantNorm = (notVacant - 72.8)*(100/(92.1 - 72.8)); 

    var homeValueNormH = (homeValue - 113900)*(650/(576100 - 113900));
    var homeValueNormW = (homeValue - 113900)*(650/(576100 - 113900));

    var homeOwnersNormH = (homeOwners - 45)*(500/(73 - 45));
    var homeOwnersNormW = (homeOwners - 45)*(700/(73 - 45));
    var homeOwnersNormD = (homeOwners - 45)*((350+width)/(73 - 45));

    var incomeNorm = (income - 41754)*(359/(78945 - 41754));
    var notPovNorm = (notPov - 79.8)*(100/(92.7 - 79.8));

    var employedNorm = (employed - 95.2)*(290/(98.5 - 95.2));

    var healthNorm = (health - 83.4)*(655/(97.5 - 83.4));
    var notSecurityNorm = (notSecurity -89.7)*(525/(98.1 - 89.7));

    var hsNormC = (hs - 82.4)*(359/(93.2 - 82.4));  
    var hsNormL = ((hs - 82.4)*350/(93.2 - 82.4));  
    var someCollegeNorm = (someCollege - 13)*(1.7/(27.1 - 13));
    var bachNormC = (bach - 11)*(100/(24.9 - 11));  
    var bachNormL = (bach - 12.6)*(350/(24.9 - 12.6));  
    var gradNorm = (grad - 7.8)*(360/(32.9 - 7.8));
    var gradNormL = (grad - 7.8)*(350/(32.9 - 7.8));
    

// Stats text
var lineBreak = '<br>';
var pStyle = '<p style="font-size: 16px;line-height: 28px;color:#707070;">';
var pStyleClose = '</p>';
var weight = '<span style="font-weight: 700; color:#E51600">';
var closeWeight = '</span>';

var nameStyle = '<h5 style="text-align: left; line-height: 10px">';
var nameStyleClose = '</h5>';

var popText = 'Total population: ';
var foreignText = 'Population born outside US: ';

var homeValueText = 'Median home value: ';
var rentText = 'Median monthly rent: ';
var homeOwnersText = 'Homes that are owner-occupied: ';
var vacantText = 'Homes that are vacant: ';

var incomeText = 'Median household income: ';
var povText = 'Families living below poverty level: ';
var securityText = 'Households with social assistance: ';
var unemployedText = 'Population that is unemployed: '; 
var noHealthText = 'Population without health coverage: ';

var hsText = 'Population with high school diploma: ';
var someCollegeText = 'Population with some college: ';
var bachText = 'Population with Bachelor&#39;s degree: ';
var gradText = 'Population with graduate degree: ';

var percent = '%';
var dollar = '$';


    background(popNorm,100,foreignNorm);

    if(homeValue <= 152000) { 
      noFill();
      stroke(rentNorm,100,vacantNorm);
      strokeWeight(homeValueNormW+15);
      strokeCap(PROJECT);
      line(0,homeOwnersNormH-(homeValueNormW),width,homeOwnersNormH-(homeValueNormW));
    } else if ((homeValue <= 264000) && (homeValue > 152000)){
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

    if (income >= 57287) {
      noStroke();
      fill(incomeNorm,100,notPovNorm);
    } else {
      noFill();
      strokeWeight(30);
      strokeCap(PROJECT);
      stroke(incomeNorm,100,notPovNorm);
    }

    if ((unemployed <= 3.5) && (income >= 57287)) { 
      polygon(healthNorm,notSecurityNorm-(employedNorm/2),employedNorm, 4); 
    } else if ((unemployed <= 3.5) && (income < 57287)) {
      polygon(healthNorm,notSecurityNorm-(employedNorm/2),employedNorm-60, 4); 
    } else {
      ellipse(healthNorm,notSecurityNorm,employedNorm*1.6,employedNorm*1.6);
    } 


    if ((someCollege >= 19.5 ) && (someCollege <= 21.1 )) {
      translate(85, 85);
    } else if ((someCollege > 21.1 ) && (someCollege <= 22.6 )) {
      translate(width-85, 85);
    } else if (someCollege > 22.6 ) {
      translate(width-85, height-85);
    }  else {
       translate(85, height-85);
    }
    noStroke();
    fill(hsNormC,100,bachNormC);
    if ((hs >= 89.8) && (bach <= 19.1)) {
      rotate(PI/-2.0);
      star(0, 0, 20, 46, 4); 
    } else if ((bach > 19.1) && (grad <= 10.8)) {
      rotate(PI/-2.0);
      star(0, 0, 20, 46, 5); 
    } else if (grad > 10.8) {
      rotate(PI/-2.0);
      star(0, 0, 20, 46, 6); 
} else {
      rotate(PI/-4.0);
      star(0, 0, 19, 46, 4); 
};

var nameStats = nameStyle + name + nameStyleClose;
var nameStatsText = createDiv(nameStats);
nameStatsText.parent('stateName');
noLoop();

var popStats = pStyle + popText + weight + pop + closeWeight + lineBreak + foreignText + weight + foreign + percent + closeWeight + pStyleClose;
var popStatsText = createDiv(popStats);
popStatsText.parent('population');
noLoop();

var houseStats = pStyle + homeValueText + weight + dollar + homeValue + closeWeight + lineBreak + rentText + weight + dollar + rent + closeWeight + lineBreak + homeOwnersText + weight + homeOwners + percent + closeWeight + lineBreak + vacantText + weight + vacant + percent + closeWeight + pStyleClose;
var houseStatsText = createDiv(houseStats);
houseStatsText.parent('housing');
noLoop();

var ecoStats = pStyle + incomeText + weight + dollar + income + closeWeight + lineBreak + povText + weight + pov + percent + closeWeight + lineBreak + securityText + weight + security + percent + closeWeight + lineBreak + unemployedText + weight + unemployed + percent + closeWeight + lineBreak + noHealthText + weight + noHealth + percent + closeWeight + pStyleClose;
var ecoStatsText = createDiv(ecoStats);
ecoStatsText.parent('economy');
noLoop();

var eduStats = pStyle + hsText + weight + hs + percent + closeWeight + lineBreak + someCollegeText + weight + someCollege + percent + closeWeight + lineBreak + bachText + weight + bach + percent + closeWeight + lineBreak + gradText + weight + grad + percent + closeWeight + lineBreak + pStyleClose;
var ecoStatsText = createDiv(eduStats);
ecoStatsText.parent('education');
noLoop();



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






