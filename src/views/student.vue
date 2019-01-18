<template>
    <div id="FORM">
        <div class="white"></div>
        <div class="title">寒假返校信息登记</div>
        <form>
            <label for="institute">学院：</label>
            <input v-model="institute" type="text" id="institute" name="b"><br/>
            <label for="name">姓名：</label>
            <input v-model="name" type="text" id="name" name="c"><br/>
            <label for="number">学号：</label>
            <input v-model="number" type="text" id="number" name="d"><br/>
            <label for="IDcard">身份证号：</label>
            <input v-model="IDcard" type="text" id="IDcard" name="e"><br/>
            <label for="nation">民族：</label>
            <input v-model="nation" type="text" id="nation" name="f"><br/>
            <label for="school">所在校区：</label>
            <input v-model="school" type="text" id="school" name="g"><br/>
            <label for="reason">未返校原因：</label>
            <input v-model="reason" type="text" id="reason" name="h"><br/>
            <label for="time">预计返校时间：</label>
            <input v-model="time" type="text" id="time" name="i">
            <div id="submit-info" @click="studentSubmit">提交</div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                institute: '',
                name: '',
                number: '',
                IDcard: '',
                nation: '',
                school: '',
                reason: '',
                time: '',

            }
        },
        methods:{
            studentSubmit(){
                let isSubmit=confirm("是否确认提交？");
                if(isSubmit){
                    axios.post("/huangdongxv",{
                        b:this.institute,
                        c:this.name,
                        d:this.number,
                        e:this.IDcard,
                        f:this.nation,
                        g:this.school,
                        h:this.reason,
                        i:this.time
                    }).then(function(res){
                        console.log(res);
                    }).catch(function(err){
                        console.log(err);
                    })
                }
            }
        }
    }
</script>
<style scoped>
    #FORM{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .white {
        border-top: 1px solid white;
        height: 1px;

    }
    .title {
        font-size: 1.4em;
        letter-spacing: 1px;
        /*border:1px solid red;*/
        width:100%;
        text-align: center;
        margin-top:40px;
        font-family:Arial,Verdana,Sans-serif;
    }
    #FORM form {
        width: 34%;
        margin: 0 auto;
        margin-top:40px;
    }
    label {
        cursor: pointer;
        /*border:1px solid black;*/
        display: inline-block;
        width: 32%;
        margin-top:16px;
        text-align: right;
        font-size: 1.2em;
        letter-spacing: 0.2px;
    }
    input {
        width: 60%;
        height: 34px;
        margin-top: 16px;
        padding-left: 3px;
        font-size: 1.1em;
        letter-spacing: 0.2px;
    }
    input:focus{
        outline-color:rgb(167,139,99);
    }
    #submit-info {
        margin: 0 auto;
        margin-top: 50px;
        cursor: pointer;
        width: 100px;
        text-align: center;
        font-size: 1.3em;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 600px) {
        .title {
            box-sizing: border-box;
            margin-top: 57px;
            width: 100%;
            padding-left:30%;
            font-size: 1.2em;
            letter-spacing: 0.9px;
        }
        #FORM form {
            width: 100%;
            margin: 0 auto;
            margin-top:30px;
        }
        label{
            cursor: pointer;
            /*border:1px solid black;*/
            display: inline-block;
            line-height: 30px;
            height:30px;
            text-align: right;
            width: 35%;
            float:left;
            margin-top:7px;
            font-size: 1.1em;
            letter-spacing: 0.2px;
        }
        input {
            width: 56%;
            height: 30px;
            margin-top: 7px;
            padding-left: 3px;
            font-size: 1.1em;
            letter-spacing: 0.2px;
        }
        input:focus{
            outline-color:rgb(181,182,230);
        }
        #submit-info {
            margin: 0 auto;
            margin-top: 25px;
            cursor: pointer;
            width: 70px;
            text-align: center;
            font-size: 1.25em;
            letter-spacing: 1px;
        }
    }
</style>

