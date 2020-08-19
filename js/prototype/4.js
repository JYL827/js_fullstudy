// // let _this = this // 行业潜规则，底杠表示私有属性

// Person.prototype.name = 'wn'
// function Person() {
//     // var this = {
//     //     __proto__: Person.prototype
//     // }
// }
// var person = new Person()
// console.log(person.name)

// var obj = {
//     name: '蜗牛'
// }
// console.log(person.__proto__) // {name: 'wn'}
// person.__proto__ = obj
// console.log(person.__proto__)



// 问题
Person.prototype.name = 'wn'
function Person() {

}
var person = new Person()
Person.prototype = { // 把原型重新赋值
    name: 'pipi'
}

console.log(person.name)