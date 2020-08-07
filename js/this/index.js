// function identify(context) {
//     return context.toUpperCase()
// }

// function speak(context) {
//     let greeting = "hello, I'm" + identify(context)
//     console.log(greeting)
// }

// speak("me")

// function identify() {
//     return this.name.toUpperCase()
// }

// function speak() {
//     let greeting = "hello, I'm" + identify.call(this)
//     console.log(greeting)
// }

// let me = {
//     name: "wn"
// }
// speak.call(me)

// this所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo() {
//     let person = {
//         name: 'wn',
//         age: '18'
//     }
//     console.log(this) // window
// }

// function bar() {
//     let person = {
//         name: 'wn',
//         age: '18'
//     }
//     foo()
// }
// bar()

// function foo() {
//     // "use strict"
//     console.log(this.a)
// }
// var a = 2;

// (function() {
//     "use strict"
//     foo() // 严格模式下的foo的调用，与位置无关
// })()


// function foo() {
//     console.log(this.a)
// }
// var obj2 = {
//     a: 3,
//     foo: foo
// }

// var obj1 = {
//     a: 2,
//     obj2: obj2
// }
// obj1.obj2.foo() // foo此刻被obj所拥有/包含

// function foo() {
//     console.log(this.a)
// }
// // function doFoo(fn) { // 参数传递其实又被称为隐式赋值
// //     fn()
// // }
// var obj = {
//     a: 2,
//     foo: foo()
// }
// var a = 'hello'
// var bar = obj.foo;
// console.log(bar)
// doFoo(obj.foo)


function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
}
var a = 'hello'
var bar = obj.foo();
console.log(bar)