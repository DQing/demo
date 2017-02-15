<template>
    <div class="input">
        <input type="search">
    </div>
</template>
<style lang="less">
    .input{
        width: 380px;
        height: 42px;
        background: black;
    }
    input {
        width: 260px;
        height: 36px;
        float: right;
        margin: 3px 40px;
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
