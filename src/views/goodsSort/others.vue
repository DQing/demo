<template>
    <div>
        <ui-Header></ui-Header>
    </div>
</template>
<style>
</style>
<script>
    import uiHeader from '../../components/header.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            uiHeader
        }
    }
</script>
