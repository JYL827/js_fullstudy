function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaa')
            resolve('11')
        }, 1000)
    })
}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bbb')
            resolve('2333')
        }, 1000)
    })
}
function c() {
    setTimeout(() => {
        console.log('ccc')
    }, 500)
}
function d() {
    setTimeout(() => {
        console.log('ddd')
    }, 3000)
}
function e() {
        console.log('eee')
}

// Promise pending(进行中) resolved(已成功) rejected(已失败)

// finally 不管Promise最后是个什么状态，都能走进finally里面
// a().then(b).catch(c).finally(d)

// all 
// Promise.all([a(), b()]).then(e)

// race
Promise.race([a(), b()]).then(e)