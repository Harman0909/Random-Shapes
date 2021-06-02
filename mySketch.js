function setup() {
	frameRate(5);
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	let shape = {
		x: random(windowWidth),
		y: random(windowHeight),
		type: int(random([1, 2]))
	}
	fill(random(255));
	if (shape.type == 1) {
		ellipse(shape.x, shape.y, random([10, 25, 50]), random([50, 80, 90]));
	}
	if (shape.type == 2) {
		rect(shape.x, shape.y, random([10, 25, 50]), random([50, 80, 90]));
	}
}
