const enableDebugMode = (enable) => {
  if (enable) {
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key === 'p') {
        window.paused = !window.paused;
        log('paused', window.paused)
      }
      // if ('1234'.includes(key)) {
      //   blocks = loadLevel(key);
      // }
    }, false);
  }
};

// var blocks = loadLevel(4)
// var paused = false
// var debugMode = true


// var __main = function () {
//   enableDebugMode(true)
//   var game = Game()
//   var paddle = Paddle()
//   var ball = Ball()
//   var secondBall = Ball(300, 500)
//   // var block = Block([0, 0, 1])
//   // var blocks = loadLevel(4)
//   log(blocks)

//   game.registerAction('a', paddle.moveLeft)
//   game.registerAction('d', paddle.moveRight)
//   game.registerAction('f', function () {
//     ball.fire()
//     secondBall.fire()
//   })


//   game.update = function () {
//     if (window.paused) {
//       return
//     }
//     ball.move()
//     secondBall.move()
//     if (paddle.collide(ball)) {
//       ball.speedY *= -1
//     }
//     // if (paddle.collide(secondBall)) {
//     //   secondBall.speedY *= -1
//     // }

//     updateBlocks(blocks)


//   }
//   game.draw = function () {
//     game.drawImage(paddle)
//     game.drawImage(ball)
//     // game.drawImage(secondBall)
//     // game.drawImage(block)
//     drawBlocks(blocks)
//   }

//   var drawBlocks = function (blocks) {
//     for (var i = 0; i < blocks.length; i++) {
//       var block = blocks[i]
//       if (block.alive) {
//         game.drawImage(block)
//       }
//     }
//   }
//   var updateBlocks = function (blocks) {
//     for (var i = 0; i < blocks.length; i++) {
//       var block = blocks[i]
//       if (block.alive) {
//         if (block.collide(ball)) {
//           ball.bounce()
//           block.hurt()
//         }
//       }
//     }
//   }

//   document.querySelector('#id-range').addEventListener('change', function (event) {
//     var value = event.target.value
//     log('range = ', value)
//     game.setFps(value + 1)
//   }, false)


//   // document.addEventListener('keyup', function (event) {
//   //   // log(event.key)
//   //   if (event.key === 'p') {
//   //     paused = !paused
//   //   }
//   // }, false)


// }
function main() {
  const images = {
    ball: './img/ball.png',
    paddle: './img/paddle.png',
    block: './img/block.png',
  };
  enableDebugMode(true);
  // 创建game实例
  const game = Game.instance(30, images, (g) => {
    const startSence = StartSence.instance(g);
    // // log('startSence', startSence.draw);
    // log('g.sence', g.sence);
    // log('fps=', window.fps)
    g.runWithSence(startSence);
    // log(startSence)
    // const mainSence = MainSence.instance(g);
    // g.runWithSence(mainSence)
  });
}
main();
