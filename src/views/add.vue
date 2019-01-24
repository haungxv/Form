<template>
    <div>
        <p>目前生成表格的标签有：</p>
        <ul>
            <li v-for="list in lists">{{list.name}}</li>
        </ul>
        <label for="add">请输入您要添加的表格标签：</label><br/>
        <input id="add" type="text" v-model="mes">
        <div id="submit" @click="submit">提交</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:[
                    {name:'学号'},
                    {name:'姓名'},
                ],
                mes:''
            }
        },
        methods:{
            submit(){
                this.lists.push({
                    name:this.mes
                });
                this.mes='';
            }
        }
    }
</script>
<style scoped>

</style>