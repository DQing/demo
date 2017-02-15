<template>
    <div class="app">
        <ui-Header></ui-Header>
        <ui-Slider></ui-Slider>
        <ui-Goods></ui-Goods>
        <ui-Footer></ui-Footer>
    </div>

</template>
<style lang="less">
    .app{
        width: 380px;
        background-color: gainsboro;
    }

</style>
<script>
    import uiSlider from '../../components/slider.vue';
    import uiHeader from  '../../components/header.vue';
    import uiGoods from './goods.vue';
    import uiFooter from '../../components/footer.vue'
    export default {

        data (){
            return {
                a: 1
            }
        },
        components: {
            uiSlider,
            uiHeader,
            uiGoods,
            uiFooter
        }
    }
</script>
