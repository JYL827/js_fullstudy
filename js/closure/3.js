// 实现一个函数执行出来的结果都是累加的
// 不依赖外部变量，实现如上效果
function test() {
    var count = 0
    function a() {
        count++
        console.log(count)
    }
    return a
}
var b = test()
b()
b()
b()
b()
b()
b()
b = null