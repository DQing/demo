<template>
    <div class="footer">
        <!--<img src="../assets/img/u130.png">-->
        <a href="#">二手市场</a>
        <!--<img src="../assets/img/u130.png">-->
        <a v-link="{name:'lose'}">失物拾物</a>
        <!--<img src="../assets/img/u130.png">-->
        <a v-link="{name:'publish'}">我要发布</a>
        <!--<img src="../assets/img/u130.png">-->
        <a href="#">我的</a>
    </div>
</template>
<style lang="less">
    .footer {
        font-size: 3em;
        clear: both;
        height: 45px;
        background-color: white;
        border: 1px solid grey;
        line-height: 30px;
        a{
            color: black;
            font-size: 15px;
            margin-left: 35px;
            border: 2px solid gainsboro;
            /*display: inline-block;*/
            width: 30px;
            height: 40px;
           border-radius: 20%;
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
