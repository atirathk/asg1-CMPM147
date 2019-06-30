export class Particle {
	construcor(x, y) {
		this.originX = x;
		this.originY = y;
		this.x = x;
		this.y = y;
		this.status = "dead";
	}
	this.update = function() {
		this.x += this.xForce;
		this.y = this.yForce;
		setInterval((this.lifetime -= -1), 1000);
		if(this.lifetime = 0) {
			this.kill();
		}
	}
	emit(xForce, yForce, lifetime) {
		this.status = "alive";
		this.xForce = xForce;
		this.yForce = yForce;
		this.lifetime = lifetime;
	}
	kill() {
		this.status = "dead";
		this.x = this.originX;
		this.y = this.originY;
	}
}