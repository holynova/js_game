var Game = function (fps = 60) {
  var o = {
    actions: {},
    keydowns: {},
    fps: fps,
  }
  o.canvas = document.querySelector('#canvas')
  o.context = canvas.getContext('2d')

  o.registerAction = function (key, callback) {
    o.actions[key] = callback
    o.keydowns[key] = false
  }
  o.drawImage = function (imageObj) {
    // log(imageObj)
    o.context.drawImage(imageObj.image, imageObj.x, imageObj.y)
  }
  document.addEventListener('keydown', function (event) {
    o.keydowns[event.key] = true
  }, false)

  document.addEventListener('keyup', function (event) {
    o.keydowns[event.key] = false
  }, false)
  o.draw = function () {
    log('Game.draw')
  }
  o.update = function () {
    log('Game.update')
  }
  setInterval(function () {
    var keys = Object.keys(o.actions)
    for (let i = 0; i < keys.length; i += 1) {
      var key = keys[i]
      if (o.keydowns[key]) {
        o.actions[key]()
      }
    }
    o.update()
    // clear canvas
    o.context.clearRect(0, 0, canvas.width, canvas.height)
    // draw image
    o.draw()
  }, 1000 / o.fps)

  return o
}