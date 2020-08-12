// 一元操作符 +

console.log(1 + '1') // 字符串'11'
// 1 ==> '1' // 隐式类型转换
// '1' + '1'

console.log(+'1') // 1
// +  调用toNumber方法  Number('1')
console.log(+['1']) // 1

// ToPrimitive(input, [preferredType])
// input表示要处理的值
// preferredType,非必填，表示希望转换成的类型，Number 和 String
// 如果preferredType没传，input是日期类型时，preferredType相对于String,其他时候都相对于Number

//Toprimitive(obj, Number)
// 1.如果obj是基本类型，直接返回
// 2.否则，调用valueOf，如果返回一个原始值，则js将其返回
// 3.否则，调用toString，如果返回一个原始值，则js将其返回
// 4.否则，js抛出一个类型错误异常

//Toprimitive(obj, String)
// 1.如果obj是基本类型，直接返回
// 3.否则，调用toString，如果返回一个原始值，则js将其返回
// 2.否则，调用valueOf，如果返回一个原始值，则js将其返回
// 4.否则，js抛出一个类型错误异常
console.log(+['1','2','3'])
console.log(+{}) // NaN

// 二元操作符 +
// val1 + val2 => Toprimitive(val1) + Toprimitive(val2)
null + 1,
[] + [],
[] + {}
{} + {} // [object Object][object Object]