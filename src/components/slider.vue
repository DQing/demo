<template>
    <slider width="380px" height="240px"  :interval="1000" :speed="1000">
        <slider-item :style="{ backgroundColor: '#3f51b5' }"></slider-item>
        <slider-item :style="{ backgroundColor: '#eee' }"></slider-item>
        <slider-item :style="{ backgroundColor: '#f44336' }"></slider-item>
    </slider>
</template>
<style>

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
