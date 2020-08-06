let data = [
    { value: '听妈妈的话，我听了10年！', time: 5, color: 'red', speed: 1, fontSize: 22 },
    { value: '牛逼啊，蜗牛！', time: 6, color: '#00a1f5', speed: 1, fontSize: 22 },
    { value: '周董十年老粉不请自来！', time: 5, color: 'red', speed: 1, fontSize: 30 },
    { value: '听妈妈的话，别让她受伤！', time: 5 },
    { value: '快点长大吧！', time: 8, color: '#11wd5f', speed: 1, fontSize: 22 },
    { value: '十四年啦！', time: 7, color: 'blue', speed: 1, fontSize: 20 },
]

// 获取所有需要的dom元素
let canvas = document.getElementById('canvas')
let $video = document.getElementById('video')
let $text = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 创建 CanvasBarrage类
class CanvasBarrage {
    constructor(canvas, video, opts = {}) { // constructor 是一种用于创建和初始化类的方法
        // opts = {} 表示如果没有传值就默认为{}, 防止报错, ES6的写法

        if (!canvas || !video) return

        // 将传进来的参数挂载到this上
        this.video = video
        this.canvas = canvas
        // 设置canvas的宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.width

        // 获取画布，操作画布
        this.ctx = canvas.getContext('2d')

        // 设置默认参数，如果没有传值就给带上
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }

        // 合并对象，再挂载到this上
        Object.assign(this, defOpts, opts) // 后两个参数合并到第一个参数中，并且后面有重复的key值就覆盖前面的
        // 添加属性，用来判断播放暂停，默认是true为暂停
        this.isPaused = true
        // 得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item, this))
    }
}


// 创建第二个类，用来实例化每一条弹幕
class Barrage {
    constructor(obj, ctx) {
        this.value = obj.value; // 获取弹幕内容
        this.time = obj.time; // 弹幕的出现时间
        // 把obj和ctx都挂载到this上方便获取
        this.obj = obj
        this.context = ctx
    }
    init() {
        // 如果数据里没有涉及到这4种参数，就直接取默认参数
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        // 计算每一条弹幕的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerText = this.value
        document.body.appendChild(p)

        // 把P标签添加到body里，这样就可以拿到宽度
        // 设置弹幕的宽度
        this.width = p.clientWidth
        // 得到了弹幕的宽度后，就把P标签移除
        document.body.removeChild(p)

        // 设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()

        // 做一下超出范围的处理
        if (this.y < this.fontSize) {
            this.y = this.fontSize
        } else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize
        }
    }
}

// 创建canvasBarrage的实例
let CanvasBarrage = new CanvasBarrage(canvas, video, data)