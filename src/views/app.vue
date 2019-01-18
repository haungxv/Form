<template>
    <div id="app-box">
        <div id="box">
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted(){
            // this.bodyHeight=document.documentElement.clientHeight
        }
    }
</script>
<style scoped>
    #app-box{
        box-sizing: border-box;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        width: 100%;
        min-height:100%;
        background-image: url("../images/20.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    #box{
        position: relative;
        overflow: auto;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-box-flex: 1;
        box-flex: 1;
        -webkit-overflow-scrolling: touch;
    }
    @media screen and (max-width: 600px){
        #app-box{
            background-image: url("../images/5.jpg");
        }
    }
</style>