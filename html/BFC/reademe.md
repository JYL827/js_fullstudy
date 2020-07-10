# 浮动 float

浮动会让元素脱离文档流,间接导致父容器高度坍塌


# 清除浮动带来的负面影响

1. 在浮动元素最后面添加一个空容器<div style="clear: left;"></div>

2. 给浮动元素父容器添加一个伪类
.clearFix::after{
            content: '';
            clear: left;
            display: block;
        }

3. BFC --   Block Formatiting Context
   解决元素tuo.o文档流带来的负面影响，以及margin重叠的问题
   BFC的触发方式