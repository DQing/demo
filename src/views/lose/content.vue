<template>
    <div class="lose">
        <div class="sort">
            <button>招领启事</button>
            <button>失物启示</button>
        </div>

        <div class="show">
            <div>
                <img src="#" alt="image">
                <p>名称 : <span>一卡通</span></p>
            </div>

        </div>
    </div>
</template>
<style lang="less">
    .lose {
        margin: 10px;
        height: 618px;
        .sort {
            button {
                display: inline-block;
                width: 40%;
                height: 50px;
                background-color: white;
                border: 1px solid rgba(121, 121, 121, 1);
                margin-right: 30px;
            }
        }
        .show{
            margin-top: 10px;
            img{
                width: 100px;
                height: 100px;
                border: 5px solid darkgrey;
            }
            p{
                float: right;
                border: 1px solid rgba(121, 121, 121, 1);
                background-color: white;
                width: 248px;
                height: 107px;
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
