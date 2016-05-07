let five = require("johnny-five");
let Tessel = require("tessel-io");
let board = new five.Board({
  io: new Tessel()
});
board.on("ready", function() {
  let leds = new five.Leds(["a0", "a1", "a2", "a3", "a4", "a5"]);
  leds.blink(500);
});
