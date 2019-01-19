<template>
    <div id="app-box">
        <img src="../images/20.jpg" id="backImage1"  v-if="Image1" />
        <img src="../images/5.jpg" id="backImage2"  v-if="Image2" />
        <div id="box">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                Image1: false,
                Image2: false
            }
        },
        mounted() {
            if (document.body.clientWidth < 600) {
                this.Image2 = true;
                this.Image1 = false;
                $("#backImage2").height($(window).height());
                this.$nextTick(function(){
                    $("#backImage2").height($(window).height());
                });
            } else {
                this.Image1 = true;
                this.Image2 = false;
                this.$nextTick(function(){
                    $("#backImage1").height($(window).height());
                });
            }

        },
        methods: {},
        watch: {}
    }
</script>
<style scoped>
    #backImage1 {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        /*height: 100%;*/
        z-index: -1
    }
    #backImage2 {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        /*height: 100%;*/
        z-index: -1
    }

    /*#app-box:before {*/
    /*content: ' ';*/
    /*position: fixed;*/
    /*z-index: -1;*/
    /*top: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*background-image: url("../images/20.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    /*}*/
    #app-box {
        /*position:absolute;*/
        /*bottom:0;*/
        width: 100%;
        height: 100%;
        /*border:1px solid red;*/
    }

    #box {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 600px) {

        /*#app-box:before {*/
        /*background-image: url("../images/5.jpg");*/
        /*}*/
    }

</style>