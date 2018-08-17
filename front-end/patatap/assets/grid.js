var circles = []
var keyData = {

  q: {
    sound: new Howl({
      src: ['assets/sounds/sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
  },
  w: {
    sound: new Howl({
      src: ['assets/sounds/sounds/clay.mp3']
    }),
    color: '#2ecc71'
  },
  e: {
    sound: new Howl({
      src: ['assets/sounds/sounds/confetti.mp3']
    }),
    color: '#3498db'
  },
  r: {
    sound: new Howl({
      src: ['assets/sounds/sounds/corona.mp3']
    }),
    color: '#9b59b6'
  },
  t: {
    sound: new Howl({
      src: ['assets/sounds/sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
  },
  y: {
    sound: new Howl({
      src: ['assets/sounds/sounds/flash-1.mp3']
    }),
    color: '#16a085'
  },
  u: {
    sound: new Howl({
      src: ['assets/sounds/sounds/flash-2.mp3']
    }),
    color: '#27ae60'
  },
  i: {
    sound: new Howl({
      src: ['assets/sounds/sounds/flash-3.mp3']
    }),
    color: '#2980b9'
  },
  o: {
    sound: new Howl({
      src: ['assets/sounds/sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
  },
  p: {
    sound: new Howl({
      src: ['assets/sounds/sounds/moon.mp3']
    }),
    color: '#2c3e50'
  },
  a: {
    sound: new Howl({
      src: ['assets/sounds/sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
  },
  s: {
    sound: new Howl({
      src: ['assets/sounds/sounds/piston-1.mp3']
    }),
    color: '#e67e22'
  },
  d: {
    sound: new Howl({
      src: ['assets/sounds/sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
  },
  f: {
    sound: new Howl({
      src: ['assets/sounds/sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
  },
  g: {
    sound: new Howl({
      src: ['assets/sounds/sounds/prism-2.mp3']
    }),
    color: '#f39c12'
  },
  h: {
    sound: new Howl({
      src: ['assets/sounds/sounds/prism-3.mp3']
    }),
    color: '#d35400'
  },
  j: {
    sound: new Howl({
      src: ['assets/sounds/sounds/splits.mp3']
    }),
    color: '#1abc9c'
  },
  k: {
    sound: new Howl({
      src: ['assets/sounds/sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
  },
  l: {
    sound: new Howl({
      src: ['assets/sounds/sounds/strike.mp3']
    }),
    color: '#3498db'
  },
  z: {
    sound: new Howl({
      src: ['assets/sounds/sounds/suspension.mp3']
    }),
    color: '#9b59b6'
  },
  x: {
    sound: new Howl({
      src: ['assets/sounds/sounds/timer.mp3']
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      src: ['assets/sounds/sounds/ufo.mp3']
    }),
    color: '#16a085'
  },
  v: {
    sound: new Howl({
      src: ['assets/sounds/sounds/veil.mp3']
    }),
    color: '#27ae60'
  },
  b: {
    sound: new Howl({
      src: ['assets/sounds/sounds/wipe.mp3']
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      src: ['assets/sounds/sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
  },
  m: {
    sound: new Howl({
      src: ['assets/sounds/sounds/moon.mp3']
    }),
    color: '#2c3e50'
  }
}

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height)
  var randomPoint = Point.random()
  var point = maxPoint * randomPoint
  var newCircle = Path.Circle(point, 100)
  newCircle.fillColor = keyData[event.key].color
  keyData[event.key].sound.play()
  circles.push(newCircle)
}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1
    circles[i].scale(0.9)
    if (circles[i].area < 1) {
      circles[i].remove() // remove the circle from the canvas
      circles.splice(i, 1) // remove the circle from the array
      i-- // decrement i so that the loop doesn't skip a circle because of .splice()
      console.log(circles)
    }
  }
}
