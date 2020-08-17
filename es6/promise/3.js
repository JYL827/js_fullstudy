let xq = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('蜗牛相亲了！')
        resolve('相亲成功！嘿嘿')
    }, 2000)
})

xq
.then((res) => {
    // console.log(res)
    // if (res == '相亲成功！嘿嘿') {
    //     marry()
    // }
    return marry()
})
.then((res) => {
    // console.log(res)
    return baby1()
})
.then((res) => {
    baby2()
}).catch((err) => {
    console.log(err)
})

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('蜗牛结婚了！')
            resolve('蜗牛结婚顺利')
        }, 1000)
    })

}

function baby1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小蜗牛1出生')
            // resolve('111')
            reject('no')
        }, 500)
    })

}

function baby2() {
    setTimeout(() => {
        console.log('小蜗牛2出生')
    }, 400)
}
// xq()
// marry()
// baby1()
