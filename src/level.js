var levels = [
  [
    [100, 100, 1]
  ],
  [
    [100, 100, 1],
    [200, 100, 1],
  ],
  [
    [100, 100, 1],
    [200, 100, 1],
    [300, 100, 1],
  ],
  [
    [100, 100, 1],
    [200, 100, 1],
    [300, 100, 1],
    [100, 200, 1],
    [200, 200, 1],
    [300, 200, 1],
    [150, 300, 1],
    [250, 300, 1],
    [350, 300, 1],
  ],
]

var loadLevel = function (levelNum) {
  var levelData = levels[levelNum - 1]
  var blocks = []
  for (var i = 0; i < levelData.length; i++) {
    var block = Block(levelData[i])
    blocks.push(block)
  }
  return blocks
}