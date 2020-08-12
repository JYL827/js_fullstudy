// 隐藏内部实现


// function foo(a) {
//     var b;

//     function bar(a) {
//         return a - 1
//     }

//     b = a + bar(a * 2) // 2 + 2 * 2 -1 = 5
//     console.log(b * 3) // 5 * 3 = 15
// }

// foo(2)


// 规避冲突

function foo() {

    function bar(a) {
        var i = 3
        console.log(a + i)
    }
    for (var i = 0; i < 10; i++) {
        bar(i * 2)
    }
}
foo ()