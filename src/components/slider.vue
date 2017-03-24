<template>
    <div class="slider">
        <slider  :interval="2000" :speed="2000" :indicators="center" :control-btn="false">
            <slider-item ><img src="../assets/img/u40.jpg"></slider-item>
            <slider-item ><img src="../assets/img/u42.jpg"></slider-item>
            <slider-item ><img src="../assets/img/u44.jpg"></slider-item>
            <slider-item ><img src="../assets/img/u46.jpg"></slider-item>
        </slider>
    </div>
</template>
<style lang="less">
    .slider {
        width: 415px;
        height:100px;
        img{
            width: 415px;
            height: 230px;
        }
    }
</style>
<script>
    import {Slider, SliderItem} from 'vue-easy-slider'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            Slider,
            SliderItem
        }
    }
</script>
