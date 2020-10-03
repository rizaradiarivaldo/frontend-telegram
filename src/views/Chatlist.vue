<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-12 bg-white">
           <div class="row">
            <div class="col-lg-8 col-8 text-left p-4">
              <h5>Telegram</h5>
            </div>
            <div class="col-lg-4 col-4 p-4 text-right">
              <img src="../assets/icon/Menu.svg">
            </div>
          </div>

          <div class="row profile">
            <div class="col-lg-12">
              <img src="../assets/icon/profile.svg">
              <h3>Gloria Mckinney</h3>
              <h6 class="mb-5">@wdlam</h6>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-10 col-10 p-3 text-left">
              <div class="form-group row">
                <label for="colFormLabelSm" class="col-lg-2 col-2 col-form-label col-form-label-sm"><img src="../assets/icon/Search.svg" alt=""></label>
                <div class="col-lg-10 col-10">
                  <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Type your message...">
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-2 p-3">
              <img src="../assets/icon/Plus.svg" alt="">
            </div>
          </div>
          <div class="d-flex align-items-center menu">
              <p class="menu-chat">All</p>
              <p class="menu-chat">Important</p>
              <p class="menu-chat">Unread</p>
          </div>
          <div class="row text-left mt-4">
            <div class="col-lg-3 col-3">
              <img src="../assets/img/profile1.svg" alt="">
            </div>
            <div class="col-lg-7 col-7">
              <p class="font-weight-bold">Theresa Webb</p>
              <p style="margin-top: -18px">Why did you do that?</p>
            </div>
            <div class="col-lg-2 col-2">
               <p class="font-weight-bold">15.20</p>
               <p style="margin-top: -18px;" class="notice-count d-flex align-item-center">1</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-9  d-flex justify-content-center align-items-center "> -->
          <!-- <div class="row">
            <div class="col-lg-12 text-left">
              <img src="../assets/logo.png" alt="">
            </div>
          </div> -->
        <!-- </div> -->

        <div class="col-lg-9">
          <div class="row" style="background-color: #ffffff">
            <div class="col-lg-8 col-8 text-left p-4">
              <div class="row">
                <div class="col-lg-2">
                  <img src="../assets/img/profile1.svg">
                </div>
                 <div class="col-lg-4" style="margin-left: -20px">
                <p class="mt-1 font-weight-bold">Mother</p>
                <p style="margin-top: -10px">Online</p>
                </div>
              </div>
            </div>
              <div class="col-lg-4 col-4 text-right p-4">
              <img src="../assets/img/Profile menu.svg">
            </div>
          </div>

          <div class="row text-left">
            <div class="col-lg-12 d-flex p-4">
              <img src="../assets/img/profile2.svg">
              <p class="ml-4 bubble">
                dfskjfslkdjf jsdklfjlksj
                fsdfsdffdfsfdsfdssddfdsfsdfsfsdsdfsfj,jkjkljkljkljklj
                sdfsafassdsad
                fsfsfs Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque inventore molestiae obcaecati praesentium! Ipsum neque commodi tenetur maxime architecto tempore asperiores dolorem temporibus! Atque sit ab ipsum modi vero.sdssafdsfsfsdf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum consequatur obcaecati sint harum architecto blanditiis perferendis debitis eaque dolore iste rem fuga culpa aliquid veniam, nisi suscipit ipsam aut hic.
                fsdfsdfsfas
                fdsfsafaffdsfdsfsdfsdfsdfsf
                fdsafsadfas
                fsdfasfsfsa
                fsdfsfsasfs
              </p>
            </div>
          </div>
            <!-- <div class="row" style="background-color: #ffffff">
            <div class="col-lg-8 col-8 text-left p-4">
              <div class="row chating">
                <div class="col-lg-2">
                  <img src="../assets/img/profile1.svg">
                </div>
                 <div class="col-lg-8 fill-chat" style="margin-left: -20px">
                <p class="mt-1 font-weight-bold">Mother</p>
                </div>
              </div>
            </div>
          </div> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar.vue'
import { URL } from '../helpers/env'
import io from 'socket.io-client'
export default {
  name: 'Chatlist',
  components: {
    // Sidebar
  },
  data () {
    return {
      socket: io(`${URL}`)
    }
  }
}
</script>

<style scoped>
.btn-important {
  background-color: #7E98DF;
  border-radius: 20px;
  width: 120px;
  height: 40px;
}
.main-chat {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.menu-chat {
  margin-left: 40px;
  margin-right: 40px;
}
.menu {
  overflow: scroll;
}
.menu::-webkit-scrollbar{
  width: 0;
  height: 3px;
}
.menu::-webkit-scrollbar-thumb{
  background-color: gray;
}
.chating {
  position: relative;
}

/* .fill-chat {
  position: absolute;
  background-color: red;
} */

.bubble {
  padding: 20px;
  background: #7E98DF;
  border-radius: 35px 35px 35px 10px;
}
.notice {
  color: white;
  background-color: blue;
  border-radius: 20px;
  text-align: center;
  width: 20px !important;
}

.notice-count {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 10px;
}
@media (max-width: 576px) {
  .profile {
    display: none;
  }
}
</style>
