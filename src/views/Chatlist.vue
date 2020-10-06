<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-12">
           <div class="row">
            <div class="col-lg-8 col-8 text-left p-4">
              <h5>Telegram</h5>
            </div>
            <div class="col-lg-4 col-4 p-4 text-right" style="cursor: pointer;" @click="toogleMenu()">
              <img src="../assets/icon/Menu.svg">
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

          <div class="row">
            <div class="col-lg-12 user-list">
             <div class="row" style="cursor: pointer;" @click="selectUser()">
               <div class="col-lg-12">
                  <div class="side-chat">
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
               </div>
             </div>
               <div class="row" style="cursor: pointer;">
                <div class="col-lg-12">
                    <div class="side-chat">
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
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                    <div class="side-chat">
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
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                    <div class="side-chat">
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
                </div>
              </div>
               <div class="row">
                <div class="col-lg-12">
                    <div class="side-chat">
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
                </div>
              </div>
               <div class="row">
                <div class="col-lg-12">
                    <div class="side-chat">
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
                </div>
              </div>
               <div class="row">
               <div class="col-lg-12">
                  <div class="side-chat">
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
               </div>
             </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-lg-12">
              <img src="../assets/img/profile1.svg" alt="">
            </div>
          </div> -->

        </div>

        <!-- if data kosong -->
        <!-- <div class="col-lg-9  d-flex justify-content-center align-items-center">
          <div class="row">
            <div class="col-lg-12 text-left">
              <img src="../assets/logo.png" alt="">
            </div>
          </div>
        </div> -->

        <!-- <div class="col-lg-3 col-12">

         <div class="row">
            <div class="col-lg-12">
                <div class="d-flex justify-content-between align-items-center p-4">
                  <h5>Telegram</h5>
                  <img src="../assets/icon/Menu.svg" alt="">
                </div>
           </div>
         </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="d-flex justify-content-between align-items-center p-4">
              <img src="../assets/icon/Search.svg" alt="">
              <input type="text" class="form-control form-control-sm m-2" placeholder="Type your message...">
              <img src="../assets/icon/Plus.svg" class="ml-5">
            </div>
           </div>
          </div>

          <div class="row">
           <div class="col-lg-12 font-weight-bold">
              <div class="d-flex align-items-center menu">
                <p class="menu-chat">All</p>
                <p class="menu-chat">Important</p>
                <p class="menu-chat">Unread</p>
            </div>
           </div>
          </div>

           <div class="row">
            <div class="col-lg-12 font-weight-bold">
             <div class="row">
               <div class="col-lg-12 d-flex align-items-center">
                 <img src="../assets/img/profile1.svg" alt="">
                <div class="row">
                  <div class="col-lg-12" style="display: grid;">
                   <p style="margin-left: 20px">Mother</p>
                    <p style="margin-top: -20px; margin-left: 20px;">fdfsdf</p>
                  </div>
                </div>
                 <img src="../assets/img/profile1.svg" style="margin-left: 40px;">
               </div>
                <div class="col-lg-12">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui, voluptatum alias facilis voluptate quidem aliquid laudantium adipisci iste, repellendus vero ratione perspiciatis maiores sequi quae, quasi dolore dolor tempore.</p>
               </div>
                <div class="col-lg-12">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui, voluptatum alias facilis voluptate quidem aliquid laudantium adipisci iste, repellendus vero ratione perspiciatis maiores sequi quae, quasi dolore dolor tempore.</p>
               </div>
             </div>
            </div>
          </div>

        </div> -->
        <div class="col-lg-9 side-right">
          <div class="row" style="background-color: #ffffff;" v-b-toggle.sidebar-right>
            <div class="col-lg-8 col-8 text-left pt-4 pl-2 pr-2">
              <div class="row">
                <div class="col-lg-1">
                  <img src="../assets/img/profile1.svg">
                </div>
                 <div class="col-lg-4 ml-4">
                <p class="mt-1 font-weight-bold">Mother</p>
                <p style="margin-top: -10px">Online</p>
                </div>
              </div>
            </div>
              <div class="col-lg-4 col-4 text-right p-4">
              <img src="../assets/img/Profile menu.svg">
            </div>
          </div>

          <div class="row in-chat">
            <div class="col-lg-12">
                <div class="row text-left">
                  <div class="col-lg-12 col-12 d-flex align-items-end p-4 row-chat">
                    <img src="../assets/img/profile1.svg">
                    <p class="ml-4 bubble-your">
                    Kak lagi dimana ? mau ga odading mang oleh ?
                    </p>
                  </div>
                </div>

                <div class="row text-left">
                  <div class="col-lg-12 col-12 d-flex align-items-end p-4 row-chat">
                    <img src="../assets/img/profile1.svg">
                    <p class="ml-4 bubble-your">
                    Kak lagi dimana ? mau ga odading mang oleh ?
                    </p>
                  </div>
                </div>

                <div class="row text-right">
                  <div class="col-lg-12 col-12 d-flex align-items-end justify-content-end p-4 row-chat">
                    <p class="mr-4 bubble-me">
                    Mau atuh mah biar kuat seperti ironman, rasanya enak ga ?
                    </p>
                    <img src="../assets/img/profile3.svg">
                  </div>
                </div>

                  <div class="row text-left">
                  <div class="col-lg-12 col-12 d-flex align-items-end p-4 row-chat">
                    <img src="../assets/img/profile1.svg">
                    <p class="ml-4 bubble-your">
                    Kak lagi dimana ? mau ga odading mang oleh ?
                    </p>
                  </div>
                </div>

                <div class="row text-right">
                  <div class="col-lg-12 col-12 d-flex align-items-end justify-content-end p-4 row-chat">
                    <p class="mr-4 bubble-me">
                    Mau atuh mah biar kuat seperti ironman, rasanya enak ga ?
                    </p>
                    <img src="../assets/img/profile3.svg">
                  </div>
                </div>
                  <div>
                    <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
                    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
                      <div class="px-3 py-2">
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
                      </div>
                    </b-sidebar>
                  </div>
              </div>
          </div>

          <div class="row d-flex align-items-center">
              <div class="col-lg-10 col-10 d-flex align-items-end justify-content-end row-chat">
                <input type="text" class="form-control" placeholder="Ketik pesan">
              </div>
              <div class="col-lg-2 col-2 text-right">
                <img src="../assets/icon/Plus.svg" style="cursor: pointer;" class="ml-2 mr-2" alt="">
                <img src="../assets/icon/Vector.svg" style="cursor: pointer;" class="ml-2 mr-2" alt="">
                <img src="../assets/icon/Group 181.svg" style="cursor: pointer;" class="ml-2 mr-2" alt="">
              </div>
              <!-- <div v-for="(item,index) in listUsers" :key="index">
                {{item}}
              </div> -->
          </div>

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
      socket: io(`${URL}`),
      email: this.$route.query.email,
      listUsers: []
    }
  },
  methods: {
    selectUser () {
      alert('ini list chat')
    },
    toogleMenu () {
      alert('hhh')
    }
  },
  mounted () {
    this.socket.emit('get-all-users', [])
    this.socket.on('list-users', (data) => {
      this.listUsers = data
    })
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
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
}
.menu-chat {
  margin-left: 30px;
  margin-right: 30px;
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
/* .side-chat {
  background-color: red;
  display: grid;
} */
/* .fill-chat {
  position: absolute;
  background-color: red;
} */
.side-right {
  height: 100vh !important;
  display: grid;
  grid-template-rows: 1.5fr 6fr 1.5fr;
}
.user-list {
  overflow: scroll;
  height: 70vh;
}
.user-list::-webkit-scrollbar{
  width: 5px;
}
.user-list::-webkit-scrollbar-thumb{
  background-color: gray;
}
.in-chat {
  overflow: scroll;
  /* padding: 20px; */
  /* height: 80vh; */
}
.in-chat::-webkit-scrollbar{
  width: 5px;
}
.in-chat::-webkit-scrollbar-thumb{
  background-color: gray;
}
.row-chat p {
  margin-bottom: 0;
}
.bubble-your{
  /* width: 50%; */
  max-width: 50%;
  padding: 20px;
  background: #7E98DF;
  border-radius: 35px 35px 35px 10px;
  color: white;
}
.bubble-me{
  max-width: 50%;
  padding: 20px;
  background: #787894;
  border-radius: 35px 35px 10px 30px;
  color: white;
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
  .menu-chat {
    margin-left: 60px;
    margin-right: 60px;
  }
}
</style>
