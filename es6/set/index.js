// const s = new Set() //类数组
// // const arr = new []
// // console.log(s)
// let arr = [2,3,5,6,7,2,6,7]
// // for (let i = 0; i <arr.length; i++) {
// //     console.log(arr[i])
// // }
// // for (let item of arr) {
//     // console.log(item)
// // }
// arr.forEach((x) => {
//     s.add(x)
// })
// console.log(s)



// const set = new Set([1,2,3,4,4,5,5])
// console.log(set.size)


// 数组去重
// let arr = [2,3,5,6,7,2,6,7]
// console.log([...new Set(arr)])

// 字符串去重
// console.log([...new Set('qewqwrrwr')])

// const set =  new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)
// console.log(set)

// const set = new Set()
// set.add(1).add(2).add(3)
// set
// console.log(set)

// Array.from(['q','w','e','r']).forEach(e => { 
//     console.log(e)
// })


// set遍历

// keys是set结构中返回键名的遍历器
// values是set结构中返回元素的遍历器
// entries是set结构中返回键值对的遍历器
let set = new Set(['red','green','blue'])
for (let item of set.keys()) {
    // console.log(item)
}
for (let item of set.values()) {
    // console.log(item)
}
for (let item of set.entries()) {
    console.log(item)
}
// 