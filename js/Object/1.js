// // 对象
// var mrLei = {
//     name: 'leilei',
//     age: '20',
//     sex: 'boy',
//     health:100,
//     smoke: function() {
//         console.log('I am smoking cool!')
//         this.health--
//     },
//     drink: function() {
//         console.log('I am drinking')
//         this.health++
//     }
// }

// // console.log(mrLei.health)

// // 增
// // mrLei.boyFriend = 'zhiHong'

// // 改
// // mrLei.sex = 'girl'

// // 删
// delete mrLei.name
// console.log(mrLei)


// 对象创建
// 1. var obj = {} // 对象字面量 | 对象直接量
// 2. 构造函数

// 1)
    // let a = new Object() // 和var obj = {} 没有区别
    // let b = new Object() 

// 2)
function Car(color) { // 大驼峰式命名
    this.color = color
    this.name = 'BMW'
    this.height = '1400'
    this.lang = '4900'
    this.weight = 1000
    this.health = 100
    this.run = function() {
        this.health--
    }
}

var car = new Car('black')
var car1 = new Car('white')

car.name = '红旗'
car1.name = '劳斯莱斯'
console.log(car)
console.log(car1)