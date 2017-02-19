<template>
    <div class="header">
        <div class="return"><a v-link="{name:'index'}">返回</a></div>
        <div class="right">
            <span>举报</span>
            <span>分享</span>
            <span>收藏</span>
        </div>
    </div>
</template>
<style lang="less">
    .header{
        background-color: black;
        height: 50px;
        line-height: 50px;
        color: white;
        .return{
            float: left;
        }
        .right{
            float: right;
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
