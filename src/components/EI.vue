<template>

<div>

<!--    <el-row>-->
<!--        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>-->
<!--    </el-row>-->
<!--    <el-row>-->
<!--        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--    </el-row>-->
<!--    <el-row>-->
<!--        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
<!--    </el-row>-->
<!--    <el-row>-->
<!--        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--    </el-row>-->
<!--    <el-row>-->
<!--        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
<!--        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--    </el-row>-->
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i  id="front" class="el-icon-delete"></i>
    <el-button  type="primary" icon="el-icon-search">搜索</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-calendar v-model="value">
    </el-calendar>

</div>
</template>

<script>
    export default {
        data () {
            return {
                radio: '1',
                value: new Date()
            };
        },
        name: "EI"
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    #front{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
