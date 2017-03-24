<template>
    <div class="content">
        <ui-Header></ui-Header>
        <goods-Show></goods-Show>
    </div>
</template>
<style>
    .content {
        width: 415px;
        height: 618px;
        background-color: rgba(215, 215, 215, 1);
    }
</style>
<script>
    import uiHeader from '../../components/header.vue';
    import goodsShow from '../../components/goodsShow.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            uiHeader,
            goodsShow
        }
    }
</script>
