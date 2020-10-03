<template>
<div class="container-fluid">
  <div class="row d-flex justify-content-center main-page">
    <div class="col-lg-4 col-11  main-login p-4">
      <form @submit.prevent="onLogin()">
        <h5 class="text-center" style="color: #7E98DF">Login</h5>
        <p class="text-left mt-4 mb-4">Hi, Welcome back!</p>

        <div class="md-form">
          <input type="text" v-model="form.email" id="email" class="form-control">
          <label for="email">Email</label>
        </div>

        <div class="md-form" style="">
          <input type="password" v-model="form.password" id="password1" class="form-control">
          <label for="password1">Password</label>
        </div>

        <div class="form-group text-right">
          <router-link to="forgot-password">Forgot Password ?</router-link>
        </div>

        <div class="form-group text-center">
          <button type="submit" class="btn btn-block btn-login">Login</button>
        </div>

        <div class="row">
          <div class="col-lg-4 col-4">
            <hr class="line">
          </div>
          <div class="col-lg-4 col-4 text-center mt-1">
            <p>Login with</p>
          </div>
          <div class="col-lg-4 col-4">
            <hr class="line">
          </div>
        </div>

        <div class="form-group text-center">
         <button class="btn btn-block btn-google">
         <img src="../assets/icon/google.svg">
          Google
          </button>
        </div>

        <div class="form-group text-center">
       <p>Don’t have an account? <router-link to="/register" style="color: #7E98DF">Sign Up</router-link></p>
        </div>

      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      console.log(this.form.email)
      // this.form = ''
    }
  }
}
</script>

<style scoped>
.main-page {
  padding-top: 50px;
}
.main-login {
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height: 90vh;
  text-align: left
}

.line {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px;
}

.btn-login {
  background: #7E98DF;
  border-radius: 50px;
  color: #ffffff;
  padding: 15px;
}
.btn-google {
  border-radius: 50px;
  color: #7E98DF;
  padding: 15px;
  border: 2px solid #7E98DF;
}

@media (max-width: 576px) {
  .main-login {
  background: #e9e9e9;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height: 110vh;
  text-align: left;
  }
}

</style>
