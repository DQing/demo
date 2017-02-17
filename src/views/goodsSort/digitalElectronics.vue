<template>
    <div class="content">
        <ui-Header></ui-Header>
        <electron-Sort></electron-Sort>
        <div class="digshow">
            <goods-Show></goods-Show>
        </div>
    </div>
</template>
<style lang="less">
    .content {
        width: 380px;
        background-color: rgba(215, 215, 215, 1);
        .digshow{
            margin-top:120px;
            /*border: 1px solid red;*/
        }
    }
</style>
<script>
    import uiHeader from '../../components/header.vue';
    import electronSort from './subComponents/electronSort.vue';
    import goodsShow from '../../components/goodsShow.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            electronSort,
            uiHeader,
            goodsShow
        }
    }
</script>
