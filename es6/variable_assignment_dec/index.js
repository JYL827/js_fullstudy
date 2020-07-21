// let a = 1
// let b = 2
// let c = 3

// 一一对应
// let[a,b,c] = [1,2,3]

// let [, , third] = ['a','b','c']
// console.log(third)

// let [head, ...tail] = [1,2,3,4]
// console.log(head,tail)
// // 解构符'...'赋值剩下全部元素，如果没有值，则默认空数组

// let [x,y = 'aaa'] = ['a', undefined] //undefined 赋值解构默认不成功,元素保留初始值

// let [x = 1, y = x] = [2,3]

// console.log(x,y)

// 对象的解构

// let obj = {
//     name: '元隆',
//     age: 18
// }

// let {name, age} = obj
// console.log(name, age)


// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// // foo是匹配模式，baz才是变量

// let obj = {
//     name: '子晨',
//     desc: {
//         alone: false,
//         age: 20,
//         sanwei: [50, 100, 120]
//     }
// }

// let{name, desc: {alone, age,sanwei:[x,y,z]}} = obj;
//     console.log(name,alone,age,x,y,z)


// 注意！
// let x
// ({x} = {x : 1})
// console.log(x)


// // 字符串的解构
// // let [a,b,c,d,e] = 'hello'
// // console.log(a,b,c,d,e)
// let {length: len} = 'hello'
// console.log(len)


// 数值和布尔值的解构赋值
let {toString: s} = 123
console.log(s === Number.prototype.toString)