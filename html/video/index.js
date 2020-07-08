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
    // 调用四舍五入函数
    var playbackrate = percent * (max - min) + min
    bar.style.height = height
    bar.textContent = playbackrate.toFixed(2) + 'x'
    video.playbackRate = playbackrate
}

speed.addEventListener('mousemove', handlemove)
// 用监听器监听鼠标移动事件并触发方法