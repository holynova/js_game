class MainSence extends GameSence {
  constructor(game) {
    super(game);
    this.paddle = Paddle.new(game)
    this.ball = Ball.new(game)
    // this.blocks = [Block.new(game, 100, 100)]
    // this.block = Block.new(game, 100, 100)
    let levelData = [
      { x: 0, y: 100 },
      { x: 100, y: 100 },
      { x: 200, y: 100 },
      { x: 50, y: 200 },
      { x: 150, y: 200 },
      { x: 250, y: 200 },
    ]
    levelData = this.genLevel(5, 10)
    log('levelData', levelData)
    this.level = Level.new(game, levelData)
  }
  genLevel(maxRow = 5, maxCol = 5) {
    let block = Block.new(this.game, 0, 0, 1)
    let gutter = 20
    let blockWidth = block.image.w
    let blockHeight = block.image.h

    let levelData = [];
    for (let row = 0; row < maxRow; row++) {
      for (let col = 0; col < maxCol; col++) {
        let blockData = {
          x: col * blockWidth + gutter,
          y: row * blockHeight + gutter
        }
        levelData.push(blockData)
      }
    }
    return levelData
  }

  update() {
    this.ball.update()
    this.paddle.update(this.ball)
    // this.block.update(this.ball)
    this.level.update(this.ball)
  }
  draw() {
    // log('main sence draw')
    this.paddle.draw()
    this.ball.draw()
    // this.block.draw()
    this.level.draw()
    // log(window.fps)
    // this.game.context.fillText('main sence', 100, 100);
  }
}
