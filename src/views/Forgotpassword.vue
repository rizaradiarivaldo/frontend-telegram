<template>
<div class="container-fluid">
  <div class="row d-flex justify-content-center main-page">
    <div class="col-lg-4 col-11  main-forgot-password p-4">
      <form>
        <div class="row">
          <div class="col-lg-1 col-1">
            <router-link to="/login">
              <img src="../assets/icon/back.svg">
            </router-link>
          </div>
          <div class="col-lg-11 col-11">
              <h5 class="text-center" style="color: #7E98DF; margin-left: -30px">Forgot Password</h5>
          </div>
        </div>
        <p class="text-left  mt-4 mb-4">You’ll get messages soon on your e-mail!</p>
        <div class="md-form">
          <input type="text" v-model="form.email" id="email" class="form-control">
          <label for="email">Email</label>
        </div>
        <div class="form-group text-center mt-5">
          <button type="submit" class="btn btn-block btn-send">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Forgotpassword',
  data () {
    return {
      form: {
        email: ''
      }
    }
  }
}
</script>

<style scoped>
.main-page {
  padding-top: 50px;
}
.main-forgot-password {
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height:70vh;
  text-align: left
}

.line {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px;
}

.btn-send {
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
  .main-forgot-password {
  background: #e9e9e9;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height: 120vh;
  text-align: left;
}

 }

</style>
