'use strict';

const BlyncCommand = require('./blync-command');

function BlyncLight(device) {
  this.device = device;
}

BlyncLight.prototype.setColorAsDecimal = function(opts) {
  const command = new BlyncCommand({
    red: opts.red,
    green: opts.green,
    blue: opts.blue
  });
  this.device.write(command.getBuffer());
};

BlyncLight.prototype.setColorAsHex = function(opts) {
  if (opts.code) {
    const command = new BlyncCommand({ rgbHex: opts.code });
    this.device.write(command.getBuffer());
  } else {
    const command = new BlyncCommand({
      redHex: opts.red,
      greenHex: opts.green,
      blueHex: opts.blue
    });
    this.device.write(command.getBuffer());
  }
};

BlyncLight.prototype.turnOff = function() {
  const command = new BlyncCommand({
    red: 0,
    green: 0,
    blue: 0
  });
  this.device.write(command.getBuffer());
}

module.exports = BlyncLight;