class GameSence {
  constructor(game) {
    this.game = game;
  }
  static instance(game) {
    this.ownInstance = this.ownInstance || new this(game);
    return this.ownInstance;
  }
  update() {
    // this.i = 0;
  }
  draw() {

  }
}
