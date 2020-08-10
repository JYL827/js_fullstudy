// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2
// }

// foo.apply(obj)
// foo.call(obj) // bind


var a = { 
    user: '蜗牛',
    fn: function(q, w) {
        console.log(this.user)
        // console.log(q + w)
    }
}
var b = a.fn

// b.apply(a, [10, 11])

// var arr = [100, 200]
// b.apply(a, arr)
var c = b.bind(a)
c(1, 2)