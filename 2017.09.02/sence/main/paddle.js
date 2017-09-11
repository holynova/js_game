// var Paddle = function (game) {
//   var o = {
//     x: 300,
//     y: 550,
//     speed: 10,
//     image: imageFromPath('./paddle.png')
//   }
//   o.moveLeft = function () {
//     o.x -= o.speed
//     if (o.x < 0) {
//       o.x = 0
//     }
//   }
//   o.moveRight = function () {
//     o.x += o.speed
//     if (o.x + o.image.width > 800) {
//       o.x = 800 - o.image.width
//     }
//   }
//   o.collide = function (ball) {
//     if (ball.x > o.x + o.image.width ||
//       ball.x + ball.image.width < o.x ||
//       ball.y > o.y + o.image.height ||
//       ball.y + ball.image.height < o.y) {
//       return false
//     } else {
//       return true
//     }
//   }
//   return o
// }

class Paddle {
  constructor(game) {
    this.game = game
    this.image = this.game.imageByName('paddle')
    this.speed = 10
    this.x = 300
    this.y = 550
    let self = this
    this.game.registerAction('a', function () {
      self.move(-self.speed)
    })
    this.game.registerAction('d', function () {
      self.move(self.speed)
    })
  }

  static new(game) {
    return new Paddle(game)
  }

  move(speed) {
    this.x += speed
    if (this.x < 0) {
      this.x = 0
    } else if (this.x + this.image.w > 800) {
      this.x = 800 - this.image.w
    }
  }

  collide(ball) {
    // log('ball ', ball)
    if (ball.x > this.x + this.image.w ||
      ball.x + ball.image.w < this.x ||
      ball.y > this.y + this.image.h ||
      ball.y + ball.image.h < this.y) {
      return false
    } else {
      return true
    }
  }

  update(ball) {
    if (this.collide(ball)) {
      log('collide')
      ball.bonce()
    }
  }
  draw() {
    this.game.drawImage({ image: this.image.image, x: this.x, y: this.y })
  }


}