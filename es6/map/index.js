// let obj = {
//     name: '明国',
//     age: 18,
//     sex: 'man'
// }

// const m = new Map()
// // console.log(m)//Map {}
// m.set(obj, 'content')
// // console.log(m)
// // Map { { name: '明国', age: 18, sex: 'man' }: 'content' }
// // console.log(m.get(obj))

// m.has()
// m.delete(obj)


// const map = new Map([
//     ['name', '祥祥'],
//     ['age', '20']
// ])
// console.log(map.size)
// console.log(map.get('name'))

// const items = [
//     ['name', '祥祥'],
//     ['age', '20']
// ]
// const map = new Map()
// items.forEach(([key,value]) =>{
//     map.set(key,value)
// })

// const set = new Set([
//     ['foo',1],
//     ['bar',2]
// ])
// const m1 = new Map(set)
// console.log(m1)


// const map = new Map()
// const k1 = ['a']
// const k2 = ['a']
// map.set(k1,'111').set(k2,'222')//k1,k2值相同，存放地址不同，在Map中也被视为不同的键值对


// map.set(-0,123) //0,-0 默认就是一个键
// map.set(+0,123)
// map.set(NaN,1)//NaN 默认就是一个键
// map.set(NaN,2)
// console.log(map)
const map = Map([
    ['foo','no']
    ['bar','yes']
])
//  keys() 返回键名的遍历器
//  values() 返回键值的遍历器
//  entries() 返回键值对
for (let key of map.keys()) {
    console.log(key)
}
for (let key of map.values()) {
    console.log(key)
}
for (let key of map.entries()) {
    console.log(key)
}

