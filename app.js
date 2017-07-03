(function() {
  var gameCanvas = document.getElementById('game-canvas');
  gameCanvas.width = window.screen.availWidth;
  gameCanvas.height = window.screen.availHeight;
  var ctx = gameCanvas.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, window.screen.availWidth, window.screen.availHeight);
  
  function TouchHandler(canvas) {
    this.canvas = canvas;
    
    this.canvas.addEventListener('touchstart', function(e) {
      this.onTouchStart(e);
    });
    this.canvas.addEventListener('touchmove', function(e) {
      this.onTouchMove(e);
    });
    this.canvas.addEventListener('touchend', function(e) {
      this.onTouchEnd(e);
    });
    
    this.tapBoxes = [];
    this.touches = [];
  }
  
  TouchHandler.prototype.onTouchStart = function(e) {
    
  };
  
  window.addEventListener('scroll', function(e) {
    e.preventDefault();
  });
  
  console.log('isoville finished v 0.2');
})();
