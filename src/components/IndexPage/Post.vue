<template>
    <div>
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item><img style="width: 150px" src="../../assets/seneca-logo.svg" alt=""> </el-menu-item>
                <el-menu-item index="1" default-active>首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">按专业查询</template>
                    <el-menu-item index="2-1">Programming</el-menu-item>
                    <el-menu-item index="2-2">Networking</el-menu-item>
                    <el-submenu index="2-3">
                        <template slot="title">Other</template>
                        <el-menu-item index="2-3-1">Accounting</el-menu-item>
                        <el-menu-item index="2-3-2">Business</el-menu-item>
                        <el-menu-item index="2-3-3">Other</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" >学生新闻</el-menu-item>
                <el-menu-item index="4">
                    <el-input
                            prefix-icon="el-icon-search"
                            placeholder="请输入搜索内容"
                            v-model="input"
                            clearable>
                    </el-input>
                </el-menu-item>
            </el-menu>
            <div class="line"></div>
        </el-header>

       <el-card>
           <el-breadcrumb separator-class="el-icon-arrow-right">
               <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
               <el-breadcrumb-item>问题发布</el-breadcrumb-item>
               <el-breadcrumb-item>作业</el-breadcrumb-item>
               <el-breadcrumb-item>答疑</el-breadcrumb-item>
           </el-breadcrumb>
       </el-card>
        <br>
        <br>

        <el-row >

            <el-col :span="20" :push="2">
        <el-card>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="问题名称" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入问题"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="授课教师" prop="name" >
                            <el-input v-model="ruleForm.name" placeholder="请输入授课教师名字"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="课程学期" prop="name" >
                            <el-input v-model="ruleForm.name" placeholder="请选择学期"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="截止日期" >
                            <div class="block">
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-form-item label="详细描述">
                    <el-input
                            type="textarea"
                            :rows="18"
                            placeholder="请输入内容"
                            v-model="textarea">
                    </el-input>
                </el-form-item>
                <div style="text-align: right">
                    <el-button type="primary">提交</el-button>
                    <el-button type="danger">取消</el-button>
                </div>

            </el-form>
        </el-card>
        </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                ruleForm: {},
                rules: {},
                value1: '',
                textarea: ''
            }
        }
    }
</script>

<style lang="less" scoped>

</style>