// 什么是拷贝？什么是深拷贝？什么是浅拷贝？

let a = {age: 1}
let b = a
a.age = 2
console.log(b) //{age: 2}
// 复制内存地址指针的操作叫做浅拷贝

// Object.assign
// 深拷贝(不会受源数据影响的赋值操作叫做深拷贝)
let a = {age: 1}
let b = Object.assign({}, a) // Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，后面的对象覆盖前面的
a.age = 2
console.log(b) // {age: 1}