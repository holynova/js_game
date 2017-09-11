// var Ball = function (x = 400, y = 500) {
//   var o = {
//     image: imageFromPath('./ball.png'),
//     x: x,
//     y: y,
//     speedX: -5,
//     speedY: -5,
//     fired: false,
//   }
//   o.fire = function () {
//     o.fired = true
//   }
//   o.move = function () {
//     if (o.fired) {
//       o.x += o.speedX
//       o.y += o.speedY
//       if (o.x < 0 || o.x + o.image.width > 800) {
//         o.speedX *= -1
//       }
//       // if (o.y < 0 ) {
//       if (o.y < 0 || o.y + o.image.height > 600) {
//         o.speedY *= -1
//       }
//     }
//   }
//   o.bounce = function () {
//     o.speedY *= -1
//   }

//   return o
// }

class Ball {
  constructor(game) {
    this.game = game
    this.image = this.game.imageByName('ball')
    this.x = 100
    this.y = 200
    this.fired = false
    this.speed = {
      x: -10,
      y: -10
    }
    const self = this
    this.game.registerAction('f', function () {
      self.fire()
    })
    // const self = this
    // document.addEventListener('input', function (event) {
    //   if (event.key === 'f') {
    //     self.fire()
    //   }
    // }, false)
  }
  static new(game) {
    return new this(game)
  }
  fire() {
    this.fired = true
    log('fired ball')
  }
  move() {
    this.x += this.speed.x
    if (this.x < 0 || this.x + this.image.w > 800) {
      this.speed.x *= -1
    }
    this.y += this.speed.y
    if (this.y < 0 || this.y + this.image.h > 600) {
      this.speed.y *= -1
    }
  }
  bonce() {
    this.speed.y *= -1
  }
  update() {
    // log('this.fired ', this.fired, )
    if (this.fired) {
      this.move()
    }
    // this.move()
  }

  draw() {
    this.game.drawImage({ image: this.image.image, x: this.x, y: this.y })
  }

}