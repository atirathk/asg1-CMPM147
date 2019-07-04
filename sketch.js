p = Particle;
particles = ParticleSystem;
context = new AudioContext();
var pressed;
var fft, peakDetect, peaks;
let psArr = [];
function preload() {
	mySound = loadSound('This Aint The End Of Me - White Comic.mp3');
}

function setup() {
  	mySound.setVolume(0.1);
  	mySound.play();
	document.querySelector('button').addEventListener('click', function() {
		context.resume().then(() => {
			console.log('Playback resumed successfully');
		});
	  	mySound.setVolume(0.3);
	});
  	fft = new p5.FFT(0, 512);
  	peakDetect = new p5.PeakDetect(20, 30, 0.1, 20);
  	psArr.push(new ParticleSystem(1, new p5.Vector(500, 300)));
  	for(var i = 0; i < 10; i++) {
  	  	psArr.push(new ParticleSystem(30, new p5.Vector(500, 300)));
	}
}

function draw() {
  	createCanvas(1152, 648);
 	background(0);
	var temp = fft.analyze();
  	peakDetect.update(fft);
  	peakDetect.onPeak(function(){
  		console.log("peakDetect");
		var i = 0;
		while(psArr[i].alive() == true && i < psArr.length) {
			getter = psArr[i];
			i++;
		}
		psArr[i].restart();

	});
	for(var i = 0; i < psArr.length; i++) {
  		psArr[i].run();
	}
	console.log(psArr.length);
}