// function test() {

// }

// 函数也是对象，也能拥有属性
// test.name test.prototype
// test.[[scope]] // 隐式属性，不可能被拿出来用

// test() ---> AO: {}  // 回收
// test() ---> AO: {}

function a() {
    function b() {
        var b = 222
    }
    var a = 111
    b()
    console.log(a)
}
var glob = 100
a()

// 0,1,2代表作用域链的顺序，0为顶端
// a 定义 a.[[scope]]  ---> 0: GO:{}
// a 执行 a.[[scope]]  ---> 0: aAO:{}  1: GO:{}
// b 定义 a.[[scope]]  ---> 0: aAO:{}  1: GO:{}
// b 执行 a.[[scope]]  ---> 0: bAO:{}  1: aAO:{}  2:GO:{}

