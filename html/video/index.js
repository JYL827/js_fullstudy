// console.log(document.querySelector('.speed-bar'))
var bar = document.querySelector('.speed-bar')
// 创造一个变量赋值
var speed = document.querySelector('.speed')
var video = document.querySelector('.flex')
function handlemove(e) {
    var y =e.pageY - this.offsetTop
    var percent = y / this.offsetHeight
    var min = 0.4
    var max = 4
    var height = Math.round(percent * 100) + '%'
    // 调用四舍五入函数并化为百分数，与speed-bar的height设定高度单位相同
    var playbackrate = percent * (max - min) + min
    bar.style.height = height
    bar.textContent = playbackrate.toFixed(2) + 'x'
    // 把playbackrate的值赋给bar的文本信息
    // toFixed(2) 保留两位小数
    video.playbackRate = playbackrate
}

speed.addEventListener('mousemove', handlemove)
// 用监听器监听鼠标移动事件并触发函数handlemove