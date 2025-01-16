<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="registerForm"
               :rules="registerRules"
               ref="registerForm"
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="register-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">注册新用户</h2>
        <!-- 添加其他所需的输入框 -->
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="registerForm.username" autoComplete="on" placeholder="请输入用户名">
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :type="pwdType" @keyup.enter.native="handleRegister" v-model="registerForm.password" autoComplete="on" placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <!-- 其他字段如email, nickName等 -->
        <el-form-item prop="email">
          <el-input name="email" type="text" v-model="registerForm.email" autoComplete="on" placeholder="请输入邮箱">
            <span slot="prefix">
              <svg-icon icon-class="email" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <!-- 类似地添加其他字段 -->

        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleRegister">注册</el-button>
          <el-button style="width: 45%" type="primary" @click.native.prevent="backToLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="register_center_bg" class="login-center-layout">
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        email: '',
        // 添加其他需要的字段
      },
      registerRules: {
        // 根据需求定义验证规则
      },
      loading: false,
      pwdType: 'password',
      register_center_bg: require('@/assets/images/login_center_bg.png')
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleRegister() {/*

     实现注册逻辑 */

    },
    backToLogin() { this.$router.push({ path: '/login' }); }
  }
}
</script>

<style scoped>
/* 样式可以保持不变或根据需要调整 */
</style>
