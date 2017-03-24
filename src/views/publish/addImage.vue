<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <p class="title">商品发布</p>
    <div id="addImage">
        <input type="file" id="input" v-on:change="upload"/>
        <div class="user_avatar">
            <span id="images"></span>
            <a v-on:click="doClick()"><img id="add" src="../../assets/img/addPicture.png"></a>
        </div>
    </div>
</template>
<style lang="less">
    .title {
        font-size: 48px;
        position: absolute;
        left: 111px;
        top: 71px;
        width: 193px;
        height: 55px;
    }
    #addImage {
        background-color: white;
        margin-top: 70px;
        width: 96%;
        margin-left: 2%;
        height: 140px;
        #images {
            margin: 20px;
            width: 100px;
            height: 100px;
        }
        img {
            border: 1px solid black;
            margin-left: -20px;
            margin-top: 20px;
            width: 100px;
            height: 100px;
        }
        input {
            display: none;
        }
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            doClick() {
                var el = document.getElementById('input');
                if (el) {
                    el.click();
                }
            },
            upload(e){
                var files = e.target.files;
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var imageType = /^image\//;

                    if (!imageType.test(file.type)) {
                        continue;
                    }

                    var img = document.createElement("img");
                    img.classList.add("obj");
                    img.file = file;
                    document.getElementById('images').appendChild(img);

                    var reader = new FileReader();
                    reader.onload = (function (aImg) {
                        return function (e) {
                            aImg.src = e.target.result;
                        };
                    })(img);
                    reader.readAsDataURL(file);
                }
            }
        }
    }
</script>
