1. 目前对对象的认知

2. 对象属性的增删改查

3. 对象的创建方法
    - 字面量
    - 构造函数
        1) 系统自带的构造函数 Object()
        2) 自定义

# 构造函数的内部原理 2.js
1. 在函数体最前面隐式加上一个 this = {}
2. 执行 this.xxx = xxx
3. 隐式的返回这个this
(构造函数中只有显式的return对象，会干扰原隐式的return值，原始值不会)


# 包装类 3.js
1. 原始值是没有属性和方法的