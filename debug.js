var screenshot = require('./module.js');

screenshot("screenshot.png", {crop: {
  x: 100,
  y: 100,
  w: 300,
  h: 300,
}}, function(error, image) {
    if(error) {
        console.log("Screenshot failed", error);
        return;
    }
});
