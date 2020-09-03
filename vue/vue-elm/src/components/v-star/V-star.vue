
<template>
    <div class="star" :class="styletype">
        <span v-for="(itemclass, index) in itemclasses" :key="index" class="star-item" :class="itemclass"></span>
        <!-- <span  class="star-item half"  ></span> -->
    </div>
</template>
 
<script>
    const CLS_ON = 'on';
    const CLS_OFF = 'off';
    const CLS_HALF = 'half';
    const SCORE_LENGTH = 5;
 
export default {
    props: {
        size: {
            type:Number
        },
        score: {
            type:Number
        }
    },
    computed: {
        styletype() {
            return 'size-'+this.size
        },
        itemclasses() {
            // console.log(this.score)
            let result = [];
            //0.5的倍数
            let score = Math.floor(this.score*2)/2;
            //小数,任何整数取余1，值为0    4.5%1 = 0.5
            let hasDecimal = score%1 !==0;
            //整数
            let integer = Math.floor(score)
            //插入全星
            for(var i=-0;i<integer;i++){
                result.push(CLS_ON)
            }
            //插入半星
            if(hasDecimal){
                result.push(CLS_HALF)
            }
            //插入灰色星
            while(result.length<SCORE_LENGTH){
                result.push(CLS_OFF)
            }
            return result
        }
    },
}    
</script>
 
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
    .star
      font-size:0
      .star-item
        display:inline-block
      &.size-48
        .star-item
          width:30px
          height:30px
          background-size 30px 30px
          &.on
            bg-image('star48_on')
          &.off
            bg-image('star48_off')
          &.half
            bg-image('star48_half')
      &.size-36
        .star-item
          width:25px
          height:25px
          background-size 25px 25px
          &.on
            bg-image('star36_on')
          &.off
            bg-image('star36_off')
          &.half
            bg-image('star36_half')
      &.size-24
        .star-item
          width:20px
          height:20px
          background-size 20px 20px
          &.on
            bg-image('star24_on')
          &.off
            bg-image('star24_off')
          &.half
            bg-image('star24_half')
</style>
