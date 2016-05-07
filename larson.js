let five = require("johnny-five");
let Tessel = require("tessel-io");
let board = new five.Board({
  io: new Tessel()
});
board.on("ready", function() {
  let index = 0;
  let step = 1;
  let leds = new five.Leds(["a0", "a1", "a2", "a3", "a4", "a5"]);

  this.loop(50, function() {
    leds.off();
    leds[index].on();
    index += step;
    if (index === 0 || index === leds.length - 1) {
      step *= -1;
    }
  });
});
