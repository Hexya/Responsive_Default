
var Main = function() {
  var myself = this;

  this.init = function() {
    // Redimension a la fenetre
    var ratio = $(window).innerHeight()/1920;
    $('#container').css('transform','scale('+ ratio +')')
  }
  this.init()
}
