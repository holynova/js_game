class Level {
  constructor(game, blockData) {
    // this.blocks = blocks
    // this.blockData = blockData
    log('blockData', blockData)
    this.game = game
    this.blocks = this.initBlocks(blockData)
  }

  static new(game, blockData) {
    return new this(game, blockData)
  }

  initBlocks(dataArr) {
    let blocks = []
    for (let i = 0; i < dataArr.length; i++) {
      let data = dataArr[i]
      // let { x, y } = data
      let health = data.health ? data.health : 1
      let block = Block.new(this.game, data.x, data.y, health)
      blocks.push(block)
    }
    log('blocks', blocks)
    return blocks
  }

  update(ball) {
    let blocks = this.blocks
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].update(ball)
    }

  }
  draw() {
    let blocks = this.blocks
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].draw()
    }
  }


}