<template>
    <div id="teacher-FORM">
        <div class="white"></div>
        <div class="title_1">{{title_1}}</div>
        <div class="title_2">{{title_2}}</div>
        <el-button :plain="true" @click="success(SuccMes)" id="teacherSucc">成功</el-button>
        <el-button :plain="true" @click="fail(FailMes)" id="teacherFail">警告</el-button>
        <form>
            <label for="code">请填写下载码：</label>
            <input id="code" v-model="code" type="text" name="code">
            <div id="submit-code" @click="teacherSubmit">下载</div>
            <a  href="" id="down" v-show="false">点击下载</a>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                code: 'ABCDE',
                SuccMes: '上传成功，请点击下载！',
                FailMes: '上传错误，请重新上传！',
                title_1: "2019",
                title_2: "寒假学生返校信息统计表"
            }
        },
        methods: {
            teacherSubmit() {
                let isSubmit = confirm("是否确认提交下载码？");
                if (isSubmit) {
                    let qs = require('qs');
                    let instance = axios.create({
                        headers: {'content-type': 'application/x-www-form-urlencoded'}
                    });
                    let data = qs.stringify({
                        "code": this.code
                    });
                    instance.post("http://39.108.84.51:8080/check/", data)
                        .then(function (res) {
                            $("a").attr('href', "http://39.108.84.51:8080/download/" + res.data.filename);
                            $("a")[0].click();
                        })
                        .catch(function (err) {
                            // this.FailMes = err.data;
                            $("#teacherFail").click();
                        })
                }
            },
            success(mes) {
                this.$message({
                    showClose: true,
                    message: mes,
                    type: 'success'
                });
            },
            fail(mes) {
                this.$message({
                    showClose: true,
                    message: mes,
                    type: 'error'
                });
            },
        }
    }
</script>
<style scoped>
    #teacherSucc, #teacherFail {
        display: none;
    }

    #teacher-FORM {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: rgb(16, 39, 73);
    }

    .white {
        border-top: 1px solid white;
        height: 1px;

    }

    .title_1, .title_2 {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 1.4px;
    }

    .title_1 {
        margin-top: 50px;
    }

    .title_2 {
        margin-top: 6px;
    }

    #teacher-FORM form {
        margin-top: 55px;
        width: 100%;
    }

    #teacher-FORM label {
        display: block;
        text-align: center;
        width: 100%;
        cursor: pointer;
        margin: 0 auto;
        padding-top: 40px;
        font-size: 1.4em;
        letter-spacing: 0.6px;
        /*border:1px solid black;*/
    }

    #teacher-FORM input {
        display: block;
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
        width: 200px;
        height: 34px;
        font-size: 1.1em;
    }

    input:focus {
        outline-color: rgb(167, 139, 99);
        color: rgb(16, 39, 73);
    }

    #submit-code {
        border: 1px solid black;
        width: 150px;
        margin: 0 auto;
        margin-top: 100px;
        height: 32px;
        line-height: 30px;
        background-color: rgb(238, 238, 238);
        text-align: center;
        font-size: 1.3em;
        letter-spacing: 8px;
        padding-left: 8px;
        border-radius: 6px;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        .title_1, .title_2 {
            /*border:1px solid black;*/
            font-size: 1.15em;
            letter-spacing: 0.8px;
            /*padding-left: 22%;*/
            margin-top: 100px;
        }
        .title_1{
            margin-top:90px;
        }
        .title_2{
            margin-top:5px;
        }

        #teacher-FORM label {
            font-size: 1.1em;
            letter-spacing: 0.6px;
        }

        #teacher-FORM input {
            height: 28px;
            width:180px;
            font-size: 1.1em;
        }

        input:focus {
            outline-color: rgb(181, 182, 230);
        }

        #submit-code {
            width: 130px;
            font-size: 1.15em;
            letter-spacing: 8px;
            padding-left: 8px;
            height: 32px;
            line-height: 30px;
        }
    }
</style>