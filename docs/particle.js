class Particle {
	origin = p5.Vector;
	location = p5.Vector;
	velocity = p5.Vector;
	lifespan = float;
	constructor(origin) {
		this.origin = new p5.Vector(origin.x, origin.y);
		this.location = new p5.Vector(origin.x, origin.y);
		this.velocity = new p5.Vector(0, 0);
		this.lifespan = 0;
	}
	update() {
		this.location.add(this.velocity);
		this.lifespan -= 1;
		if(this.alive() == false) {
			this.kill();
		}
	}
	display() {
	    stroke(this.lifespan);
	    fill(this.lifespan);
	    ellipse(this.location.x,this.location.y,8,8);
	}
	run() {
		this.display();
		this.update();
	}
	alive() {
		if(this.lifespan < 0) {
			return false;
		}
		else {
			return true;
		}
	}
	emit(velocity, lifespan) {
		this.velocity = velocity;
		this.lifespan = lifespan;
	}
	kill() {
		this.location.x = this.origin.x;
		this.location.y = this.origin.y;
	}
}