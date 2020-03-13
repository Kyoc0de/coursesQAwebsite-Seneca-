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
                <div class="block">
                    <el-timeline>
                        <el-timeline-item
                                v-for="(activity, index) in activities"
                                :key="index"
                                :icon="activity.icon"
                                :type="activity.type"
                                :color="activity.color"
                                :size="activity.size"
                                :timestamp="activity.timestamp">
                            {{activity.content}}
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activities: [{
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                }, {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87'
                }, {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large'
                }, {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46'
                }]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>

</style>