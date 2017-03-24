<template>
    <div class="app">
        <ui-Header></ui-Header>
        <add-Image></add-Image>
        <ui-Content></ui-Content>
    </div>
</template>
<style>
    .app {
        width: 415px;
        background-color: rgba(215, 215, 215, 1);
    }
</style>
<script>
    import uiHeader from './header.vue';
    import addImage from './addImage.vue';
    import  uiContent from './content.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            uiHeader,
            addImage,
            uiContent
        }
    }
</script>
