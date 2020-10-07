<template>
<div class="container-fluid">
  <div class="row d-flex justify-content-center main-page">
    <div class="col-lg-4 col-11  main-register p-4">
      <form @submit.prevent="onRegister()">
        <div class="row">
          <div class="col-lg-1 col-1">
            <router-link to="/login">
              <img src="../assets/icon/back.svg">
            </router-link>
          </div>
          <div class="col-lg-11 col-11">
              <h5 class="text-center" style="color: #7E98DF; margin-left: -30px">Register</h5>
          </div>
        </div>
        <p class="text-left  mt-4 mb-4">Let's create your account!</p>

        <div class="md-form">
          <input type="text" v-model="form.name" id="name" class="form-control">
          <label for="name">Name</label>
        </div>

        <div class="md-form">
          <input type="email" v-model="form.email" id="email" class="form-control">
          <label for="email">Email</label>
        </div>

        <div class="md-form" style="">
          <input type="password" v-model="form.password" id="password1" class="form-control">
          <label for="password1">Password</label>
        </div>

        <div class="form-group text-center mt-5">
          <button type="submit" class="btn btn-block btn-register">Register</button>
        </div>
        <div class="row">
          <div class="col-lg-4 col-4">
            <hr class="line">
          </div>
          <div class="col-lg-4 col-4 text-center mt-1">
            <p>Register with</p>
          </div>
          <div class="col-lg-4 col-4">
            <hr class="line">
          </div>
        </div>
        <div class="form-group text-center">
         <button type="submit" class="btn btn-block btn-google">
         <img src="../assets/icon/google.svg">
          Google
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onRegister () {
      // console.log(this.form)
      this.actionRegister(this.form)
        .then((response) => {
          if (response === 'Register success!') {
            window.location = '/login'
          } else {
            alert(response)
          }
        }).catch((err) => {
          alert(err)
        })
    },
    ...mapActions({
      actionRegister: 'auth/register'
    })
  }
}
</script>

<style scoped>
.main-page {
  padding-top: 20px;
}
.main-register {
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height:95vh;
  text-align: left
}

.line {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px;
}

.btn-register {
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
  .main-register {
  background: #e9e9e9;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height: 120vh;
  text-align: left;
}

 }

</style>
