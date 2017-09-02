var Ball = function (x = 400, y = 500) {
  var o = {
    image: imageFromPath('./ball.png'),
    x: x,
    y: y,
    speedX: -5,
    speedY: -5,
    fired: false,
  }
  o.fire = function () {
    o.fired = true
  }
  o.move = function () {
    if (o.fired) {
      o.x += o.speedX
      o.y += o.speedY
      if (o.x < 0 || o.x + o.image.width > 800) {
        o.speedX *= -1
      }
      // if (o.y < 0 ) {
      if (o.y < 0 || o.y + o.image.height > 600) {
        o.speedY *= -1
      }
    }
  }
  o.bounce = function () {
    o.speedY *= -1
  }

  return o
}
