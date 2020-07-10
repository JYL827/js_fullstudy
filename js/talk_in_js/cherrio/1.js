// 对象是由方法和属性构成 语法
var duck = {
    type: '煌上煌',
    yz: 99,
    duckSing: function(){
        console.log('嘎嘎嘎')
    }
}

var jiajun = {
    name: '佳骏',
    duckSing: function(){
        console.log('嘎嘎嘎')
    }
}

var cherrio; //关键字 标识符
// console.log(cherrio) //undefined
// console.log(typeof cherrio) //undefined
// 变量的类型由值决定
// cherrio = new Array()
// console.log(cherrio)
// 基础类型不包括array array只是object的子类型
// console.log(typeof cherrio)
cherrio = []
var xgg = []

for (var i = 0; i <= 999; i++)
{
    cherrio.push(duck);
}

//   可能会有同名属性，应该判断ducksing的类型
for (var i = 0; i < xgg.length; i++) {
    if (typeof xgg[i].ducksing == 'function')
        cherrio.push(xgg[i]);
}





if (cherrio.length === 1000){
    console.log('已完成任务，报告国王')
}
duck.duckSing()


for (let singer of cherrio) {
    singer.duckSing()
}
