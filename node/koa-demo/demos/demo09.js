const Koa = require('koa')
const app = new Koa() 

const one = (ctx, next) => {
    console.log('<<one')
    next()
    console.log('one>>')
}

const tow = (ctx, next) => {
    console.log('<<tow')
    next()
    console.log('tow>>')
}

const three = (ctx, next) => {
    console.log('<<three')
    next()
    console.log('three>>')
}

app.use(one)
app.use(tow)
app.use(three)
app.listen(3000)