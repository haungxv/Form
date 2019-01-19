<template>
    <div id="teacher-FORM">
        <div class="white"></div>
        <div class="title">2019寒假学生返校信息统计表</div>
        <form>
            <label for="code">请填写下载码：</label>
            <input id="code" v-model="code" type="text" name="code">
            <div id="submit-code" @click="teacherSubmit">提交下载码</div>
            <div id="down"><a>点击下载</a></div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                code: 'ABCDE'
            }
        },
        methods: {
            teacherSubmit() {
                let isSubmit = confirm("是否确认提交下载码？");
                if (isSubmit) {
                    axios.get("http://39.108.84.51:8080/excel/", {
                            params: {
                                code: this.code
                            }
                        }
                    ).then(function (res) {
                        console.log("成功！");
                        console.log(res);
                    }).catch(function (err) {
                        console.log(err);
                    })
                }
            },

        }
    }
</script>
<style scoped>
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
        font-size: 1.2em;
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