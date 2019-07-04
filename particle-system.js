class ParticleSystem {
	pNum = int;
	origin = p5.Vector;
	pList = [];
	constructor(pNum, origin) {
		this.pNum = pNum;
		this.origin = origin;
		for (var i = 0; i < this.pNum; i++) {
  			this.pList.push(new Particle(new p5.Vector(origin.x, origin.y)));
		}
	}
	run() {
		//console.log("psystem run");
		for(var i = 0; i < this.pNum; i++) {
			p = this.pList[i];
			p.run();
			/*if (p.alive() == false) {
				p.emit(new p5.Vector(Math.cos(i), Math.sin(i)), 255);
			}*/
		}
	}
	alive() {
		return this.pList[0].alive();
	}
	restart() {
		for(var i = 0; i < this.pNum; i++) {
			this.pList[i].kill();
		}
		for(var i = 0; i < this.pNum; i++) {
			this.pList[i].emit(new p5.Vector(Math.cos(i), Math.sin(i)), 255);
		}
	}
}