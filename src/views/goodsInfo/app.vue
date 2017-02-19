<template>
    <div class="goodsInfo">
        <ui-Header></ui-Header>
        <ui-Slider></ui-Slider>
        <ui-Content></ui-Content>
    </div>
</template>
<style>
    .goodsInfo {
        width: 380px;
        background-color: rgba(215, 215, 215, 1);
    }
</style>
<script>
    import uiHeader from './header.vue';
    import uiSlider from '../../components/slider.vue';
    import uiContent from './content.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            uiHeader,
            uiSlider,
            uiContent
        }
    }
</script>
