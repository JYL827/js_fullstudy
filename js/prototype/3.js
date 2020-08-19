Person.prototype.lastName = 'Fu'
function Person(name) {
    this.Name = name
}
var person = new Person('jinlong')

// console.log(person.lastName)
// person.lastName = 'yu'
// Person.prototype.lastName = 'yu'
// console.log(Person.prototype.lastName)

// 删除
delete person.lastName



function Bus() {

}
Car.prototype = {
    constructor: Bus
}


function Car() {

}
var car = new Car()
console.log(car.constructor) // function Car() {}
console.log(Car.prototype)
// constructor 为了让Car()构造出的所有对象都能找到它的自己的构造器