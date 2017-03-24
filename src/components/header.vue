<template>
    <div class="input">
        <img src="../assets/img/lo.png" class="logo">
        <input type="search">
        <img src="../assets/img/search.png" class="search">
    </div>
</template>
<style lang="less">
    .input {
        width: 415px;
        height: 48px;
        background: black;
        .logo{
            /*float: left;*/
            position: absolute;
            left: 4px;
            top: 5px;
            width: 53px;
            height: 37px;
        }
        input {
            margin: 4px 55px;
            width: 283px;
            height: 38px;
            float: right;
            border: 3px solid inherit;
            padding: 1px 0px 1px 0px;

        }
        img {
            /*float: right;*/
            width: 24px;
            height: 21px;
            position: relative;
            left: 330px;
            top: -30px;
            color: #000000;

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
