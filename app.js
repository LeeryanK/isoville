(function() {
  var gameCanvas = document.getElementById('game-canvas');
  gameCanvas.width = window.screen.availWidth;
  gameCanvas.height = window.screen.availHeight;
  var ctx = gameCanvas.getContext('2d');
  ctx.fillRect(0, 0, window.screen.availWidth, window.screen.availHeight);
  console.log('isoville finished v 0.0');
})();
