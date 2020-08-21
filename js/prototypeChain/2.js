Person.prototype = {
    name: 'mingguo',
    sayName: function () {
        console.log(this.name)
    }
}

function Person() {
    this.name = 'yuanlong'
}
// person = new Person()
// console.log(person.sayName()) // yuanlong