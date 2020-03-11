<template>
    <div>
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1" default-active>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">分类查询</template>
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
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="20">
                        <el-table
                                stripe
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-form label-position="left" inline class="demo-table-expand">
                                        <el-form-item label="问题:">
                                            <span>{{ props.row.name }}</span>
                                        </el-form-item>
                                        <el-form-item label="老师名称:">
                                            <span>{{ props.row.shop }}</span>
                                        </el-form-item>
                                        <el-form-item label="课程ID:">
                                            <span>{{ props.row.id }}</span>
                                        </el-form-item>
                                        <el-form-item label="Due:">
                                            <span>{{ props.row.shopId }}</span>
                                        </el-form-item>
                                        <el-form-item label="问题描述:">
                                            <span>{{ props.row.desc }}</span>
                                        </el-form-item>
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
                                    label="问题描述"
                                    prop="desc">
                            </el-table-column>
                        </el-table>
                        <div class="block">
                            <br>
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[10, 20, 30, 40]"
                                    :page-size="100"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="400">
                            </el-pagination>
                        </div>

                    </el-col>
                    <el-col :span="4">
                        <el-card class="box-card">
                            <h2>公告</h2>
                            <h3>关于开发计划</h3>
                            <br>
                            <h3><a href="#">登录</a> 解锁更多功能</h3>
                        </el-card>


                    </el-col>
                </el-row>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                activeIndex: '1',
                activeIndex2: '1',
                input: '',
                tableData: [{
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '大魔王',
                    shopId: '马上就due了'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: 'IPC144',
                    name: '这个咋整',
                    category: '江浙小吃、小吃零食',
                    desc: '整不出来了,求大神',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
    a{
        color: gray;
        text-decoration: none;
    }
</style>