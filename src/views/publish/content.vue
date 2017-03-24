<template>
    <div class="info">
        <div class="infoType all">
            <span>信息类别</span>
            <input type="radio" value="0" name="type">二手发布
            <input type="radio" value="1" name="type">失物拾物
        </div>
        <div class="sort all">
            <span>物品分类</span>
            <select>
                <option>书籍教材</option>
                <option>生活用品</option>
                <option>数码电子</option>
                <option>租赁</option>
                <option>其他</option>
            </select>
            <select>
                <option>全部</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
        <div class="goodsName all">
            <span>商品名称</span>
            <input type="text">
        </div>
        <div class="goodsInfo all">
            <span>商品描述</span>
            <input type="text">
        </div>
        <div class="goodsPrice all">
            <span>商品价格</span>
            <input type="text">
        </div>
        <div class="tel all">
            <p>联系方式</p>
            <span>微信</span>
            <input type="text">
            <br>
            <span>手机</span>
            <input type="text">
        </div>
    </div>
    <div class="submit">
        <button>发布</button>
    </div>
</template>
<style lang="less">
    .info {
        height: 492px;
        margin: 20px 10px;
        background-color: white;
        padding: 30px;
        font-size: 16px;
        .all {
            padding-bottom: 15px;
        }
        span {
            margin-right: 20px;
        }
        .sort {
            select {
                width: 80px;
                height: 26px;
            }
        }
        .goodsName input {
            width: 200px;
            /*height: 40px;*/
        }
        .goodsPrice input {
            width: 200px;
            /*height: 40px;*/
        }
        .goodsInfo input {
            width: 200px;
            height: 60px;
        }
        .tel {
            span {
                display: inline-block;
                margin-top: 10px;
                margin-right: 20px;
            }
        }
    }

    .submit button {
        position: absolute;
        background-color: white;
        border:  2px solid black;
        border-radius: 40%;
        padding: 10px 30px;
        bottom: 20px;
        left: 150px;
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
