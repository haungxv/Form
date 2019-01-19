<template>
    <div id="app-box">
        <img src="../images/20.jpg" id="backImage1" v-if="Image1"/>
        <img src="../images/5.jpg" id="backImage2" v-if="!Image1"/>
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
                screenWidth: document.body.clientWidth
            }
        },
        mounted() {

            const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth
                })()
            };

            if (document.body.clientWidth < 600) {
                this.Image1 = false;
                $("#backImage2").height($(window).height());
                this.$nextTick(function () {
                    $("#backImage2").height($(window).height());
                });
            } else {
                this.Image1 = true;
                this.$nextTick(function () {
                    $("#backImage1").height($(window).height());
                });
            }

        },
        methods: {},
        watch: {
            screenWidth(val) {
                this.screenWidth = val;
                if(val < 600) {
                    this.Image1 = false;
                }
                else {
                    this.Image1 = true;
                }

            }
        }
    }
</script>
<style scoped>
    #backImage1,#backImage2 {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1
    }
    #app-box {
        width: 100%;
        height: 100%;
    }
    #box {
        width: 100%;
        height: 100%;
    }
</style>