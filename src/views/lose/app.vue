<template>
    <div class="app">
        <ui-Header></ui-Header>
        <ui-Content></ui-Content>
    </div>
</template>
<style>
    .app{
        width: 380px;
        background-color: rgba(215, 215, 215, 1);
    }
</style>
<script>
    import uiHeader from '../../components/header.vue';
    import uiContent from './content.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            uiHeader,
            uiContent
        }
    }
</script>
