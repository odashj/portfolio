var letters = [];
var sourceText = "OLIVIAJOHNSONGRAPHICDESIGN";
var curIndex = 0;

function setup() {
	var s = windowWidth*.0474;

	var canvas = createCanvas(windowWidth*.74,windowHeight*.74);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(0,13,13);


  while (letters.length < 26) {
	// for (var i = 0; i < 25; i++) {
		var letter = {
			x: random(10, width - s),
			y: random(10, height - s),
			r: s
		};

		var overlapping = false;

		var protection = 0;

		for (j = 0; j < letters.length; j++){
			var other = letters[j];
			var d = dist(letter.x, letter.y, other.x, other.y);
			if (d < letter.r + other.r) {
				//THEY ARE OVERLAPPING
				overlapping = true;
				break;
			} 
		}
		if(!overlapping){
			letters.push(letter);
		}
		protection++;

		if (protection > 1000){
			break;
		}
	}

	//OLIVIA JOHNSON GRAPHIC DESIGN
	for (var i = 0; i < letters.length; i++) {
		if (curIndex < 5) {
			noStroke();
			fill(247, 247, 247);
		} else if ((12 > curIndex) && (5 < curIndex)) {
			noStroke();
			fill(253, 247, 1);
		} else if ((19 > curIndex) && (curIndex > 12)) {
			noStroke();
			fill(233, 39, 138); 
		} else if (curIndex > 19) {
			noStroke();
			fill(47, 85, 182); 
		} 
		textSize(s);
		textFont('Helvetica');
		textStyle(BOLD);
		text(sourceText.substring(curIndex, curIndex+1), letters[i].x, letters[i].y, letters[i].r, letters[i].r);
		curIndex++;
		if (curIndex > sourceText.length) {
			curIndex = 0;
		}
	}
}


function draw() {

}


