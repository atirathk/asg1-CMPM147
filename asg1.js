import Particle from 'particle.js';

preload: function() {

},
create: function() {
    newP = new Particle(50, 50);
    newP.emit(4, 5, 5);
},
update: function() {
    
};