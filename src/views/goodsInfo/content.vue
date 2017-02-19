<template>
    <div class="message">
        <div class="time">
            <div class="info">
                <p>高数书</p>
                <p>发布日期 : <span>3天前</span></p>
            </div>
            <div class="price">
                999
            </div>
        </div>
        <div class="temple">
            <div class="name">
                <img src="#" alt="image">
                <p class="id">昵称 : <span>some</span></p>
            </div>
            <div class="introduce">
                <p class="left">商品详情</p>
                <p class="right">使用 Vue.js 和 vue-router 创建单页应用非常的简单，使用 Vue.js 开发，整个应用已经被拆分成了独立的组件。在使用 vue-router
                    时，我们需要做的就是把路由映射到各个组件，vue-router 会把各个组件渲染到正确的地方</p>
            </div>
            <div class="wechat">
                <p>微信 <span>1234557879</span></p>
            </div>
            <div class="tel">
                <p>联系电话 <span>1234557879</span></p>
            </div>

        </div>
        <div class="talk">
            <h3>说说</h3>
            <div class="saler">
                <img src="#" alt="image">
                <p class="word">word</p>
            </div>
            <div class="return">
                <img src="#" alt="image">
                <p class="word">word</p>
            </div>
        </div>
        <div class="send">
            <input type="text" placeholder="回复时直接@用户昵称">
            <button>发送</button>
        </div>
    </div>
</template>
<style lang="less">
    .message {
        margin-top: 2px;
        .time {
            border: 1px solid rgba(121, 121, 121, 1);
            background-color: rgba(255, 255, 255, 1);
            height: 45px;
            line-height: 20px;
            .info {
                float: left;
            }
            .price {
                margin-top: 5px;
                border: 1px solid rgba(121, 121, 121, 1);
                padding: 5px 10px;
                float: right;
            }
        }
        .temple {
            margin: 10px 5px;
            .name {
                img {
                    border: 3px solid darkgrey;
                    width: 40px;
                    height: 30px;
                }
                .id {
                    display: inline-block;
                    border: 1px solid rgba(121, 121, 121, 1);
                    height: 34px;
                    float: right;
                    width: 322px;
                    background-color: white;
                }
            }
            .introduce {
                background-color: white;
                border: 1px solid rgba(121, 121, 121, 1);
                margin-top: 10px;
                height: 150px;
                line-height: 26px;
                .left {
                    float: left;
                    width: 20%;
                    margin-left: 14px;
                    line-height: 150px;
                }
                .right {
                    float: right;
                    width: 70%;
                    word-wrap: break-word;
                    word-break: normal;

                }
            }

            .wechat {
                clear: both;
                height: 40px;
                margin-top: 10px;
                line-height: 40px;
                border: 1px solid rgba(121, 121, 121, 1);
                background-color: white;
                p {
                    margin-left: 14px;
                    span {
                        margin-left: 50px;
                    }
                }
            }
            .tel {
                height: 40px;
                line-height: 40px;
                margin-top: 10px;
                border: 1px solid rgba(121, 121, 121, 1);
                background-color: white;
                p {
                    margin-left: 14px;
                    span {
                        margin-left: 50px;
                    }
                }
            }
        }
        .talk {
            margin: 10px 5px;
            background-color: white;
            border: 1px solid rgba(121, 121, 121, 1);
            h3{
                padding: 10px;
            }
            .word{
                display: inline-block;
                float: right;
                border: 1px solid rgba(121, 121, 121, 1);
                height: 30px;
                width: 300px;
                margin-right: 10px;
            }
            .return{

                margin-top: 10px;
            }
            img{
                width: 40px;
                height: 30px;
                border: 3px solid darkgrey;
            }

        }
        .send{
            background-color: white;
            border: 1px solid rgba(121, 121, 121, 1);
            input{
                height: 30px;
                width: 70%;
                margin: 5px;
            }
            button{
                background-color: white;
                border: 1px solid rgba(121, 121, 121, 1);
                height: 30px;
                width: 47px;
                margin-left: 30px;
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
