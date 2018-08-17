var circles = []
function onKeyDown (event) {
  var maxPoint = new Point(view.size.width, view.size.height)
  var randomPoint = Point.random()
  var point = maxPoint * randomPoint
  var 
  circles.push(new Path.Circle(point, 10).fillColor = 'red')
}
var animatedCircle = new Path.Circle(new Point(300, 300), 100);
animatedCircle.fillColor = 'blue';

function onFrame (event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1
  }
  animatedCircle.fillColor.hue += 1
  animatedCircle.scale(0.9)
}
