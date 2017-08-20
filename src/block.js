var Block = function (blockInfo) {
  // blockInfo 格式= [x,y,health]
  var o = {
    image: imageFromPath('./block.png'),
    x: blockInfo[0],
    y: blockInfo[1],
    health: blockInfo[2] || 1,
    alive: true,
  }
  o.collide = function (ball) {
    // log('ball in collide', ball)
    if (ball.x > o.x + o.image.width ||
      ball.x + ball.image.width < o.x ||
      ball.y > o.y + o.image.height ||
      ball.y + ball.image.height < o.y) {
      return false
    } else {
      log('ball and block collide')
      return true
    }
  }
  o.hurt = function () {
    o.health -= 1
    if (o.health < 1) {
      o.alive = false
    }
  }


  return o
}