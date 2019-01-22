<template>
    <div id="teacher-FORM">
        <div class="white"></div>
        <div class="title">2019寒假学生返校信息统计表</div>
        <el-button :plain="true" @click="success(SuccMes)" id="teacherSucc">成功</el-button>
        <el-button :plain="true" @click="fail(FailMes)" id="teacherFail">警告</el-button>
        <form>
            <label for="code">请填写下载码：</label>
            <input id="code" v-model="code" type="text" name="code">
            <div id="submit-code" @click="teacherSubmit">提交下载码</div>
            <a id="down" href="">点击下载</a>
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
                FailMes: '上传错误，请重新上传！'
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
                            $("#teacherSucc").click();
                            $("a").attr('href', "http://39.108.84.51:8080/download/" + res.data.filename);
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
    }

    .white {
        border-top: 1px solid white;
        height: 1px;

    }

    .title {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 1.4px;
        margin-top: 50px;
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
        font-size: 1.4em;
        letter-spacing: 0.6px;
    }

    #teacher-FORM input {
        display: block;
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
        width: 150px;
        height: 34px;
        font-size: 1.1em;
    }

    input:focus {
        outline-color: rgb(167, 139, 99);
    }

    #submit-code {
        width: 150px;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
        font-size: 1.3em;
        letter-spacing: 0.4px;
        cursor: pointer;
    }

    #down {
        width: 150px;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
        font-size: 1.3em;
        letter-spacing: 0.4px;
        cursor: pointer;
        text-decoration: none;
        color: black;
        display: block;
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 1.15em;
            letter-spacing: 0.8px;
            padding-left: 22%;
            margin-top: 100px;
        }

        #teacher-FORM label {
            font-size: 1.1em;
            letter-spacing: 0.6px;
        }

        #teacher-FORM input {
            height: 28px;
            font-size: 1.1em;
        }

        input:focus {
            outline-color: rgb(181, 182, 230);
        }

        #submit-code {
            width: 160px;
            font-size: 1.15em;
            letter-spacing: 0.4px;
        }

        #down {
            font-size: 1.15em;
            letter-spacing: 0.4px;
        }
    }
</style>