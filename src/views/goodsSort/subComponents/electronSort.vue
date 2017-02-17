<template>
    <div id="content">
        <button class="btn btn1">手机</button>
        <button class="btn btn2">电脑</button>
        <button class="btn btn3">配件</button>
        <button class="btn btn4">数码</button>
        <button class="btn btn5">其他</button>
    </div>
</template>
<style lang="less">
    #content {
        margin-top: 20px;
        .btn {
            border: 1px solid rgba(121, 121, 121, 1);
            font-family: 'Arial Normal', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            color: #333333;
            text-align: center;
            line-height: normal;
            background-color: rgba(255, 255, 255, 1);
            margin-left: 10px;
            float: left;
        }
        .btn1 {
            width: 132px;
            height: 65px;
        }
        .btn2 {
            width: 107px;
            height: 41px;
        }
        .btn3 {
            width: 109px;
            height: 102px;
        }
        .btn4 {
            width: 148px;
            height: 30px;
            position: relative;
            margin-top: -25px;

        }
        .btn5 {
            width: 91px;
            height: 56px;
            position: relative;
            margin-top: -50px;
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
