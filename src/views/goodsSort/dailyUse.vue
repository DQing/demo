<template>
    <div class="content">
        <ui-Header></ui-Header>
        <books-Sort></books-Sort>
        <goods-Show></goods-Show>
    </div>
</template>
<style>
    .content {
        width: 380px;
        background-color: rgba(215, 215, 215, 1);
    }
</style>
<script>
    import uiHeader from '../../components/header.vue';
    import goodsShow from '../../components/goodsShow.vue';
    import booksSort from './subComponents/booksSort.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            uiHeader,
            booksSort,
            goodsShow
        }
    }
</script>
