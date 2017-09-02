class StartSence extends GameSence {
  constructor(game) {
    super(game);

    game.registerAction('k', () => {
      log('按下了k');
      const sence = MainSence.instance(game);
      game.replaceSence(MainSence);
    });
  }


  draw() {
    // log('开始画面draw', this.game.context);
    log('start draw()');
    this.game.context.fillText('按 k 开始游戏', 100, 100);
    this.game.context.fillRect(25, 25, 100, 100);
    // this.game.drawImage();
  }
}
