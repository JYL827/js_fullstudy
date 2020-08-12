// String Boolean Number Null undefined Object
// var a = 1
// var a = new Number(1)

// 原始值转布尔
// console.log() // false
// console.log(Boolean(true)) 
// console.log(Boolean(false))
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(0))
// console.log(Boolean(-0)) // false
// console.log(Boolean("")) // false
// console.log(Boolean("123")) 
// console.log(Boolean(NaN)) // false

// 原始值转数字
// console.log(Number()) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(null)) // 0
// console.log(Number(false)) // 0
// console.log(Number(true)) // 1
// console.log(Number('123')) // 123
// console.log(Number('-123')) // -123
// console.log(Number('-000123')) // -123
// console.log(Number('000123')) // 123
// console.log(Number('0x11')) // 17
// console.log(Number('123 123')) // NaN
// console.log(Number('wn')) // NaN
// console.log(Number('100a')) // NaN
// console.log(parseInt('3 abc')) // 3
// console.log(parseInt('3.14 abc')) // 3
// console.log(parseFloat('3.14 abc')) // 3.14
// console.log(parseFloat('.1')) // 0.1
// console.log(parseFloat('1')) // 1

// 原始值转字符串 原来是啥就是啥
// var a = 'aaa'
// var b = new String('111')
// console.log(String()) // ''
// console.log(String(undefined)) // 'undefined'
// console.log(String(null))
// console.log(String(false))
// console.log(String(true))
// console.log(String(0))
// console.log(String(NaN))

// // 原始值转对象
// // 原始值通过调用 String() Number() 或者 Boolean() 构造函数，转换为他们的原始对象
// var a = 'aaa'
// console.log(typeof a) // String
// var b = new String(a) 
// console.log(b) // {String: aaa}
// console.log(typeof b) // object

// // 对象转布尔值
// console.log(typeof Boolean(new Boolean(false))) // boolean

// 对象转字符串和数字
// toString valueOf
var a = {
    b: 1
}
// console.log(Object.prototype.toString.call(a))
// a.toString === Object.prototype.toString.call(a)
console.log(a.toString())
console.log([1,2,3].toString()) // 1,2,3
console.log((function(){var a = 1}).toString()) // (function(){var a = 1}
console.log(new Date().toString()) // Wed Aug 12 2020 11:07:45 GMT+0800 (GMT+08:00)
console.log(new Date().valueOf()) // 输出时间戳 时间戳永远不会重复，可以用来取名等