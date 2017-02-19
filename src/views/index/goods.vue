<template>
    <div class="content">
        <div id="sort">
            <div class="col col1">
                <a  class="good1" v-link="{name:'digitalElectronics'}">数码电子</a>
                <a  class="good2" v-link="{name:'dailyUse'}">生活用品</a>
            </div>
            <div class="col col2">
                <a  class="good3" v-link="{name:'lease'}">租赁</a>
                <a  class="good4" v-link="{name:'others'}">其他</a>
            </div>
            <div class="col col3">
                <a  class="good5" v-link="{name:'books'}">书籍教材</a>
            </div>
        </div>
        <div id="hotSale">
            <h2>热卖推荐</h2>
            <div class="book">
                <a v-link="{name:'app'}"><img src="" alt="book1"></a>
                <p><span>名称:高数</span><span>价格:99</span></p>
            </div>
            <div class="book">
                <a v-link="{name:'app'}"><img src="" alt="book2"></a>
                <p><span>名称:高数</span><span>价格:99</span></p>
            </div>

        </div>
        <div id="new">
            <h2>最新上架</h2>
            <div class="book">
                <a v-link="{name:'app'}"><img src="" alt="book1"></a>
                <p><span>名称:高数</span><span>价格:99</span></p>
            </div>
            <div class="book">
                <a v-link="{name:'app'}"><img src="" alt="book2"></a>
                <p><span>名称:高数</span><span>价格:99</span></p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .content {
        margin: 20px 5px;
        #sort {
            .col {
                float: left;
                a {
                    background-color: white;
                    display: block;
                    color: darkgray;
                    width: 121px;
                    text-align: center;
                    border: 1px solid dimgray;

                }
            }
            .col1 .good1 {
                height: 50px;
                line-height: 50px;

            }
            .col1 .good2 {
                height: 60px;
                line-height: 60px;

            }
            .col2 .good3 {
                height: 60px;
                line-height: 60px;

            }
            .col2 .good4 {
                height: 50px;
                line-height: 50px;

            }
            .col3 .good5 {
                height: 112px;
                line-height: 112px;

            }
        }

        #hotSale {
            clear: left;
            padding-top: 20px;
            .book {
                float: right;
                margin-right: 10px;
                img {
                    width: 150px;
                    height: 110px;
                    border: 10px solid darkgrey;
                }
            }
        }
        #new {
            clear: both;
            padding-top: 20px;
            .book {
                float: right;
                margin-right: 10px;
                img {
                    width: 150px;
                    height: 110px;
                    border: 10px solid darkgrey;
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
