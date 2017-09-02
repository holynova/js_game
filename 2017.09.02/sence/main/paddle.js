var Paddle = function () {
  var o = {
    x: 300,
    y: 550,
    speed: 10,
    image: imageFromPath('./paddle.png')
  }
  o.moveLeft = function () {
    o.x -= o.speed
    if (o.x < 0) {
      o.x = 0
    }
  }
  o.moveRight = function () {
    o.x += o.speed
    if (o.x + o.image.width > 800) {
      o.x = 800 - o.image.width
    }
  }
  o.collide = function (ball) {
    if (ball.x > o.x + o.image.width ||
      ball.x + ball.image.width < o.x ||
      ball.y > o.y + o.image.height ||
      ball.y + ball.image.height < o.y) {
      return false
    } else {
      return true
    }
  }
  return o
}