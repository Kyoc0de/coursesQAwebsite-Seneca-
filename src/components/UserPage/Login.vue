<template>
    <div class="login_container">
        <div class="login_box">
<!--            头像区域-->
            <div class="avatar_box">
                <img src="../../assets/avatar.png" alt="">
            </div>
<!--         登录表单区域   -->
            <el-form ref="loginFormRef" label-width="0" class="login_form" :model="loginForm" :rules="loginFormRules">
<!--                用户名-->
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
<!--                密码-->
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
<!--                按钮区域-->
                <el-form-item class="btns">
                    <span class="textOne">新用户? 点击
                        <a type="primary" href="#" :underline="false">注册</a>
                    </span>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="restLoginForm">重置</el-button>
                </el-form-item>

            </el-form>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //这是登录表单的数据对象
                loginForm:{
                    username:'',
                    password:''
                },
                //    表单验证规则对象
                loginFormRules:{
                    username:[
                        {
                            required: true, message:'请输入登录用户名称', trigger: 'blur'
                        },
                        {
                            min: 3, max: 20, message: "长度为3-20字符之间", trigger: 'blur'
                        }
                    ],
                    password:[
                        {
                            required: true, message:'请输入登录密码', trigger: 'blur'
                        },
                        {
                            min: 3, max: 20, message: "长度为3-20字符之间", trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods:{
            //点击重置按钮,重置表单
            restLoginForm(){
                this.$refs.loginFormRef.resetFields()
            },
            //调用登录
            login(){
                this.$refs.loginFormRef.validate(async valid => {
                    if(!valid){
                        return;
                    }
                    const { data : res } = await this.$http.post('login',this.loginForm)
                    if(res.meta.status !== 200){
                        return this.$message.error('登录失败')
                    }
                    this.$message.success('登录成功')
                    //存储token
                    window.sessionStorage.setItem("token",res.data.token)
                    await this.$router.push("/home")
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .login_container{
    /*background-color: #909399;*/
        background: url("../../assets/background.png");
    height: 100%;
    }

    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 6px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-35%);
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .btns{
        display: flex;
        /*justify-content: flex-end;*/
    }

    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .textOne{
        padding-left: 10px;
        padding-right: 135px;
    }

    a{
        color: blue;
        text-decoration: none;
    }

</style>