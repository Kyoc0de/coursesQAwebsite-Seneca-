<template>
    <div>
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item>
                        <img style="width: 100px" src="../../assets/logo.png"></img>
                    </el-menu-item>
                    <el-menu-item index="1"><i class="el-icon-s-home"></i>首页 | Home</el-menu-item>
                    <el-menu-item index="2" disabled><i class="el-icon-notebook-2"></i>学习资料</el-menu-item>
                    <el-menu-item index="3" disabled><i class="el-icon-news"></i>学校新闻</el-menu-item>
                    <el-menu-item index="4" disabled><i class="el-icon-more-outline"></i>更多功能</el-menu-item>
                    <el-menu-item index="5">
                        <el-input
                                prefix-icon="el-icon-search"
                                placeholder="请输入搜索内容"
                               
                                clearable>
                        </el-input>
                    </el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <el-row :gutter="30">
                    <el-col :span="20">
                        <el-table
                                stripe
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-form label-position="left" inline class="demo-table-expand">
                                        <el-row>
                                            <el-col :span="22">
                                                <el-form-item label="学期:">
                                                    <span>{{ props.row.semester }}</span>
                                                </el-form-item>
                                                <el-form-item label="教师:">
                                                    <span>{{ props.row.professor }}</span>
                                                </el-form-item>
                                                <el-form-item label="问题分类:">
                                                    <span>{{ props.row.category }}</span>
                                                </el-form-item>
                                                <el-form-item label="Due:">
                                                    <span>{{ props.row.due }}</span>
                                                </el-form-item>
                                                <el-form-item label="详细描述:" label-width="80px">
                                                    <span>{{ props.row.desc }}</span>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="2">
                                                <el-button type="primary" icon="el-icon-edit" circle
                                                    style="position: absolute;bottom: 20px "
                                                ></el-button>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="课程 ID"
                                    prop="id">
                            </el-table-column>
                            <el-table-column
                                    label="问题"
                                    prop="name">
                            </el-table-column>
                            <el-table-column
                                    label="描述"
                                    prop="desc">
                            </el-table-column>
                        </el-table>
                        <br>
                        <el-pagination
                                layout="prev, pager, next"
                                :total="1000">
                        </el-pagination>
                    </el-col>
                    <el-col :span="4">
                        <el-card class="box-card">
                            <div>Hello</div>
                            <el-divider></el-divider>
                            <div>这里是公共栏</div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeIndex: '1',
                tableData: [{
                    input: '',
                    id: 'IPC144',
                    name: '如何创建新文件夹',
                    category: '编程/作业',
                    desc: '使用命令行工具在Linux环境下创建新的文件夹',
                    due: 'week 5',
                    professor: 'Tony 老师',

                    semester: '2020 Winter'
                },
                    {
                        id: 'IPC144',
                        name: '如何创建新文件夹',
                        category: '编程/作业',
                        desc: '使用命令行工具在Linux环境下创建新的文件夹',
                        due: 'week 5',
                        shop: 'Tony 老师',
                        semester: '2020 Winter'
                    },{
                        id: 'IPC144',
                        name: '如何创建新文件夹',
                        category: '编程/作业',
                        desc: '使用命令行工具在Linux环境下创建新的文件夹',
                        due: 'week 5',
                        shop: 'Tony 老师',

                        semester: '2020 Winter'
                    }]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>