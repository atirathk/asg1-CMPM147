p = Particle;
particles = ParticleSystem;
function setup() {
  	particles = new ParticleSystem(10, new p5.Vector(500, 300));
}

function draw() {
	createCanvas(1152, 648);
 	background(0);
	particles.run();
	/*for(var i = 0; i < particles.pNum; i++) {
		p = particles.pList[i];
		if (p.alive() == false) {
			p.emit(new p5.Vector(i, 1), 255);
		}
	}*/
}