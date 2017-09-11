// var Block = function (blockInfo) {
//   // blockInfo 格式= [x,y,health]
//   var o = {
//     image: imageFromPath('./block.png'),
//     x: blockInfo[0],
//     y: blockInfo[1],
//     health: blockInfo[2] || 1,
//     alive: true,
//   }
//   o.collide = function (ball) {
//     // log('ball in collide', ball)
//     if (ball.x > o.x + o.image.width ||
//       ball.x + ball.image.width < o.x ||
//       ball.y > o.y + o.image.height ||
//       ball.y + ball.image.height < o.y) {
//       return false
//     } else {
//       log('ball and block collide')
//       return true
//     }
//   }
//   o.hurt = function () {
//     o.health -= 1
//     if (o.health < 1) {
//       o.alive = false
//     }
//   }


//   return o
// }

class Block {
  constructor(game, x, y, health = 1) {
    this.game = game
    this.image = this.game.imageByName('block')
    this.x = x
    this.y = y
    this.health = health
    this.alive = true

    log('paddle image', this.image)
  }
  static new(game, x, y, health) {
    return new this(game, x, y, health)
  }
  getAngle(ball) {
    let ballX = ball.x + ball.image.w / 2.0
    let ballY = ball.y + ball.image.h / 2.0
    let rectX = this.x + this.image.w / 2.0
    let rectY = this.y + this.image.h / 2.0
    // log('ballX', ballX)
    // log('ballY', ballY)
    // log('rectX', rectX)
    // log('this.x', this)
    // log('rectY', rectY)
    let tan = (rectY - ballY) / (ballX - rectX)
    // log('tan', tan)
    let angle = Math.atan(tan) / Math.PI * 180
    // log('angel', angle)
    return angle
  }
  collide(ball) {
    if (ball.x > this.x + this.image.w ||
      ball.x + ball.image.w < this.x ||
      ball.y > this.y + this.image.h ||
      ball.y + ball.image.h < this.y) {
      return false
    } else {
      // log('ball and block collide')
      return true
    }
  }


  update(ball) {
    if (this.alive) {
      this.getAngle(ball)
      if (this.collide(ball)) {
        ball.bonce()
        log('ball block collide')
        this.health -= 1
        if (this.health <= 0) {
          this.alive = false
        }
      }
    }
  }
  draw() {
    if (this.alive) {
      this.game.drawImage({ image: this.image.image, x: this.x, y: this.y })
    }
  }
}