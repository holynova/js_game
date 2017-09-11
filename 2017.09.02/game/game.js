// var Game = function (fps = 60) {
//   var o = {
//     actions: {},
//     keydowns: {},
//     fps: fps,
//   }
//   o.canvas = document.querySelector('#id-canvas')
//   o.context = o.canvas.getContext('2d')

//   o.registerAction = function (key, callback) {
//     o.actions[key] = callback
//     o.keydowns[key] = false
//   }
//   o.drawImage = function (imageObj) {
//     // log(imageObj)
//     o.context.drawImage(imageObj.image, imageObj.x, imageObj.y)
//   }
//   document.addEventListener('keydown', function (event) {
//     o.keydowns[event.key] = true
//   }, false)

//   document.addEventListener('keyup', function (event) {
//     o.keydowns[event.key] = false
//   }, false)
//   o.draw = function () {
//     log('Game.draw')
//   }
//   o.update = function () {
//     log('Game.update')
//   }
//   o.setFps = function (fps) {
//     o.fps = fps
//   }

//   o.frame = function () {
//     var keys = Object.keys(o.actions)
//     for (let i = 0; i < keys.length; i += 1) {
//       var key = keys[i]
//       if (o.keydowns[key]) {
//         o.actions[key]()
//       }
//     }
//     o.update()
//     // clear canvas
//     o.context.clearRect(0, 0, o.canvas.width, o.canvas.height)
//     // draw image
//     o.draw()
//   }
//   var runOnce = function () {
//     setTimeout(function () {
//       o.frame()
//       runOnce()
//     }, 1000 / o.fps)
//   }
//   runOnce()

//   return o
// }
class Game {
  constructor(fps, images, runCallback) {
    // super(props)
    window.fps = fps;
    this.images = images;
    this.runCallback = runCallback;
    // 画布相关
    this.canvas = document.querySelector('#id-canvas');
    this.context = this.canvas.getContext('2d');

    // 按键相关
    this.keydowns = {};
    this.actions = {};
    // 按键绑定
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      this.keydowns[key] = true;
    });
    document.addEventListener('keyup', (event) => {
      const key = event.key;
      this.keydowns[key] = false;
    });


    this.init();
  }

  // 用来创建一个实例
  static instance(fps, images, runCallback) {
    this.gameInstance = this.gameInstance || new this(fps, images, runCallback);
    return this.gameInstance;
  }
  // 绘图相关函数
  drawImage(img) {
    this.context.drawImage(img.image, img.x, img.y);
  }
  draw() {
    // log('draw sence', this.sence);
    this.sence.draw && this.sence.draw();
  }
  update() {
    if (!window.paused) {

      this.sence.update && this.sence.update();
    }
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  runLoop() {
    // log('loop');
    // 检测按键并执行相应的动作
    const actionKeys = Object.keys(this.actions);
    for (let i = 0; i < actionKeys.length; i += 1) {
      const key = actionKeys[i];
      if (this.keydowns[key]) {
        this.actions[key]();
      }
    }
    // 绘图
    // this.clear();
    this.update();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();

    // 一帧
    setTimeout(() => {
      this.runLoop();
    }, 1000 / window.fps);
  }
  // 注册按键handler
  registerAction(key, handler) {
    this.actions[key] = handler;
  }
  // 根据名称得到一个自己创建的image对象
  imageByName(name) {
    // load完后才有width和height
    const img = this.images[name];
    const obj = {
      // 一个 new Image()的实例
      image: img,
      w: img.width,
      h: img.height,
    };
    return obj;
  }
  // 场景相关
  runWithSence(sence) {
    this.sence = sence;
    // if (!window.paused) {
    setTimeout(() => {
      this.runLoop();
    }, 1000 / window.fps);
    // }
  }
  replaceSence(sence) {
    this.sence = sence;
    // log('this.sence = ', this.sence)
  }
  start() {
    this.runCallback(this);
  }

  init() {
    // 加载所有图片
    const names = Object.keys(this.images);
    const loadedImages = [];
    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const imagePath = this.images[name];
      log('imagePath', imagePath);
      const imageInstance = new Image();
      imageInstance.src = imagePath;
      imageInstance.onload = () => {
        this.images[name] = imageInstance;
        loadedImages.push(imageInstance);
        if (loadedImages.length === names.length) {
          // 全部图片加载完成
          this.start();
        }
      };
    }
  }
  //   init1() {
  //     var g = this
  //     var loads = []
  //     // 预先载入所有图片
  //     var names = Object.keys(g.images)
  //     log('names = ', names)
  //     for (var i = 0; i < names.length; i++) {
  //         let name = names[i]
  //         var path = g.images[name]
  //         log('path', path)
  //         let img = new Image()
  //         img.src = path
  //         img.onload = function () {
  //             // 存入 g.images 中
  //             g.images[name] = img
  //             // 所有图片都成功载入之后, 调用 run
  //             loads.push(1)
  //             log('load images', loads.length, names.length)
  //             if (loads.length == names.length) {
  //                 log('load images', g.images)
  //                 g.__start()
  //             }
  //         }
  //     }
  // }
}
