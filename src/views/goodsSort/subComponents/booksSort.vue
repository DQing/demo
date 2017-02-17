<template>
    <div class="sort">
        <button>考研</button>
        <button>四六级</button>
        <button>小说</button>
        <button>课本</button>
        <button>编程</button>
        <button>其他</button>
    </div>
</template>
<style lang="less">
    .sort{
        margin-top: 10px;
        button{
            display: inline-block;
            width: 113px;
            height: 51px;
            margin: 5px;
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(121, 121, 121, 1);
            font-family: 'Arial Normal', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            color: #333333;
            text-align: center;
            line-height: normal;
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
