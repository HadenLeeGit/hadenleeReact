var x = 250; 
var y = 250;


function setup() {
	var viewport = createCanvas(500, 500);
    viewport.parent("viewport"); 
    frameRate(60);
}

function draw() {
	background(100);
	fill("#eeeeee");
	circle(x, y, 20); 
}

function keyPressed() {
	switch (keyCode) {
	  case 37:
		x = x - 10;
		break;
	  case 38:
		y = y - 10;
		break;
	  case 39:
		x = x + 10;
		break;
	  case 40:
		y = y + 10;
		break;
	}
}
