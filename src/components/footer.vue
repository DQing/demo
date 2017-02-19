<template>
    <div class="footer">
        <a href="#">二手市场</a>
        <a v-link="{name:'lose'}">失物拾物</a>
        <a href="#">我要发布</a>
        <a href="#">我的</a>
    </div>
</template>
<style lang="less">
    .footer {
        clear: both;
        height: 30px;
        background-color: white;
        border: 1px solid grey;
        line-height: 30px;
        a{
            color: black;
            font-size: 12px;
            margin-left: 35px;
            border: 1px solid red;
            /*display: inline-block;*/
            width: 30px;
            height: 40px;
           border-radius: 50%;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
