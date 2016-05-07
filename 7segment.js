let five = require("johnny-five");
let Tessel = require("tessel-io");
let board = new five.Board({
  io: new Tessel()
});

let bits = [];
bits['P'] = [1,1,0,0,1,1,1];
bits['A'] = [1,1,1,0,1,1,1];
bits['U'] = [0,1,1,1,1,1,0];
bits['L'] = [0,0,0,1,1,1,0];

board.on("ready", function() {
  let leds = new five.Leds(["a0", "a1", "a2", "a3", "a4", "a5", "a6"]);
  leds.off();
  let word = 'PAUL';
  let index = 0;
  this.loop(500, function() {
    display(leds, word.charAt(index));
    index = (index === word.length-1) ? 0 : index+1;
  });
});

function display(leds, char) {
  let pins = bits[char];
  for(let i = 0; i < leds.length && i < pins.length; i++) {
    if(pins[i] === 1)
      leds[i].off();
    else
      leds[i].on(); 
  }
}
