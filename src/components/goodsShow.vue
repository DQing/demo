<template>
    <div id="goodsShow">
        <div class="meau">
            <button>价格由高到底</button>
            <button>价格由底到高</button>
            <button>热度</button>
        </div>
        <div class="show">
            <div class="good good1">
                <img src="#" alt="good1">
                <p><span class="name">名称:高数</span><span class="price">价格:99</span></p>
            </div>
            <div class="good good2">
                <img src="#" alt="good2">
                <p><span class="name">名称:高数</span><span class="price">价格:99</span></p>
            </div>
            <div class="good good3">
                <img src="#" alt="good3">
                <p><span class="name">名称:高数</span><span class="price">价格:99</span></p>
            </div>
            <div class="good good4">
                <img src="#" alt="good4">
                <p><span class="name">名称:高数</span><span class="price">价格:99</span></p>
            </div>

        </div>
    </div>
</template>
<style lang="less">
    #goodsShow {
        padding-top: 30px;
        .meau {
            margin: 10px 20px;
            font-size: 13px;
            color: #333333;
            button {
                margin-left: 20px;
            }
        }
        .show {
            margin: 10px 10px;
            .good {
                display: inline-block;
                margin-bottom: 20px;
                img {
                    margin: 0px 1px;
                    width: 150px;
                    height: 110px;
                    border: 10px solid darkgrey;
                }
                p {
                    border: 1px solid rgba(121, 121, 121, 1);
                    height: 30px;
                    background-color: rgba(255, 255, 255, 1);
                    line-height: 30px;
                    .name {
                        float: left;
                    }
                    .price {
                        float: right;
                    }
                }
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
