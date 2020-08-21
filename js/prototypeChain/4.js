var num = 123
num.toString()
// 包装类
// 定义num时系统会做如下操作:
// new Number(num) = 123


// 方法重写
Object.prototype.toString = function() {
    return 'hahaha'
}


function Person() {

}
var person = new Person()
console.log(person.toString())