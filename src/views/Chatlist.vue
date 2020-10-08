<template>
  <div>
    <div class="container-fluid">

     <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form @submit.prevent="updateMessage()" enctype="multipart/form-data">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" v-model="form.name" id="name">
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" v-model="form.phone" id="phone">
                </div>
                <div class="form-group">
                  <label for="bio">Bio</label>
                  <textarea class="form-control" id="bio" rows="3" v-model="form.bio" placeholder="Bio..."></textarea>
                </div>

                <label for="image">Image</label>
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input type="file"  @change="process($event)"  class="custom-file-input" id="inputGroupFile02">
                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Edit</button>
              </div>
          </form>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-12">
          <div class="row">
            <div class="col-lg-8 col-8 text-left p-4">
              <h5>Telegram</h5>
            </div>

            <div class="btn-group col-lg-4 col-4 p-4 text-right">
              <div class="btn-group dropleft" role="group">
                <div class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style="cursor: pointer;">
                  <img src="../assets/icon/Menu.svg" />
                </div>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="onLogout()">Logout</a>
                  <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal" >Edit Profile</a>

                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <img :src="`http://localhost:3000/${senderImage}`" width="30%">
              <p>{{dataSender}}</p>
              <p>{{name}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 col-10 p-3 text-left">
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-lg-2 col-2 col-form-label col-form-label-sm"
                  ><img src="../assets/icon/Search.svg" alt=""
                /></label>
                <div class="col-lg-10 col-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="Type your message..."
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-2 p-3">
              <img src="../assets/icon/Plus.svg" alt="" />
            </div>
          </div>
          <div class="d-flex align-items-center menu">
            <p class="menu-chat">All</p>
            <p class="menu-chat">Important</p>
            <p class="menu-chat">Unread</p>
          </div>

          <div class="row">
            <div class="col-lg-12 user-list">
              <div v-for="(item, index) in listUsers" :key="index">
                <div
                  class="row"
                  style="cursor: pointer"
                  v-if="item.email !== dataSender"
                  @click="selectUser(item,index)"
                >
                  <div class="col-lg-12">
                    <div class="side-chat">
                      <div class="row text-left mt-4">
                        <div class="col-lg-3 col-3">
                          <img :src="`http://localhost:3000/${item.image}`" class="img-fluid" />
                          <!-- <img :src="`${URL}/${item.image}`" alt=""> -->
                        </div>
                        <div class="col-lg-7 col-7">
                          <p class="font-weight-bold">{{ item.name }}</p>
                          <p style="margin-top: -18px">{{ item.created_at }}</p>
                        </div>
                        <div class="col-lg-2 col-2">
                          <p class="font-weight-bold">15.20</p>
                          <p
                            class="notice-count d-flex align-items-end"
                          >
                            <span>1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-9 side-right" v-if="userReceiver !== ''">
          <div
            class="row"
            style="background-color: #ffffff"
            v-b-toggle.sidebar-right
          >
            <div class="col-lg-8 col-8 text-left pt-4 pl-2 pr-2">
              <div class="row">
                <div class="col-lg-1 col-3">
                  <img
                    width="70px"
                    :src="`http://localhost:3000/${imageName}`"
                  />
                </div>
                <div class="col-lg-4 col-9">
                  <p class="mt-1 font-weight-bold ml-4">{{ userReceiver }}</p>
                  <p style="margin-top: -10px" class="ml-4">Online</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-4 text-right p-4">
              <img src="../assets/img/Profile menu.svg" />
            </div>
          </div>
          <div class="row in-chat">
              <div class="col-lg-12" v-for="(item, index) in historyMessages" :key="'a'+index">
              <div class="row text-left" v-if="item.sender !== dataSender">
                <div
                  class="col-lg-12 col-12 d-flex align-items-end p-4 row-chat"
                >
                  <img :src="`http://localhost:3000/${imageName}`" style="width: 50px;"/>
                  <p class="ml-4 bubble-your">
                    {{item.msg}}
                  </p>
                </div>
              </div>
              <div class="row text-right" v-else>
                <div
                  class="col-lg-12 col-12 d-flex align-items-end justify-content-end p-4 row-chat"
                style="margin-top: -20px">
                  <p class="mr-4 bubble-me">
                  {{item.msg}}
                  </p>
                  <img :src="`http://localhost:3000/${senderImage}`" style="width: 50px;"/>
                </div>
              </div>

            </div>
            <div class="col-lg-12" v-for="(item, index) in chatPrivates" :key="index">
              <div class="row text-left" v-if="item.sender !== dataSender">
                <div class="col-lg-12 col-12 d-flex align-items-end p-4 row-chat">
                  <img  :src="`http://localhost:3000/${imageName}`" style="width: 50px;"/>
                  <p class="ml-4 bubble-your">
                    {{item.msg}}
                  </p>
                </div>
              </div>
              <div class="row text-right" v-else>
                <div
                  class="col-lg-12 col-12 d-flex align-items-end justify-content-end p-4 row-chat"
                style="margin-top: -20px">
                  <p class="mr-4 bubble-me">
                  {{item.msg}}
                  </p>
                  <img :src="`http://localhost:3000/${senderImage}`" style="width: 50px;" />
                </div>
              </div>

            </div>
          </div>

          <form @submit.prevent="sendMessage()">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-lg-11 col-9 ">
                <input type="text" class="form-control" placeholder="Ketik pesan" v-model="chatData"/>
              </div>
              <div class="col-lg-1 col-3 text-right">
                <div class="row">
                  <button class="btn btn-primary w-100">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-9" v-else>
          <div
            class="row h-100 justify-content-center align-items-center"
            style="background-color: #ffffff">
            <div class="col-lg-12">
              <img src="../assets/img/Group 331.svg" width="50%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div>
    <b-sidebar
      width="26%"
      id="sidebar-right"
      title="Profile"
      right
      shadow
    >
    <p>My Location</p>
      <div class="px-3 py-2">
        <!-- <p>
          Cras mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </p> -->
        <google-maps class="map" :center="{
            lat: -7.404402,
            lng: 108.187274
          }" :zoom="12"> </google-maps>
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>
      </div>
    </b-sidebar>
  </div>
  </div>
</template>

<script>
import { URL } from '../helpers/env'
import io from 'socket.io-client'
import * as VueGoogleMaps from 'vue2-google-maps'
import { mapActions } from 'vuex'

export default {
  name: 'Chatlist',
  components: {
    'google-maps': VueGoogleMaps.Map
  },
  data () {
    return {
      URL: process.env.URL,
      socket: io(`${URL}`),
      // dataSender: this.$route.query.email,
      dataSender: localStorage.getItem('email'),
      listUsers: [],
      userReceiver: '',
      dataReceiver: '',
      chatData: '',
      chatRoom: [],
      chatPrivates: [],
      imageName: null,
      historyMessages: [],
      senderImage: localStorage.getItem('image'),
      name: localStorage.getItem('name'),
      image: localStorage.getItem('image'),
      newImage: '',
      phone: localStorage.getItem('phone'),
      bio: localStorage.getItem('bio'),
      form: {
        name: '',
        newImages: '',
        bio: '',
        phone: ''
      }
    }
  },
  methods: {
    selectUser (receiver) {
      this.chatRoom = []
      this.chatPrivates = []
      this.userReceiver = receiver.name
      this.dataReceiver = receiver.email
      this.imageName = receiver.image
      this.setChatPrivate()
      // alert(this.dataSender)
      this.socket.emit('get-history-message', {
        sender: this.dataSender,
        receiver: this.dataReceiver
      })
      this.getHistory()
    },
    getHistory () {
      this.socket.on('historyMessage', (data) => {
        // console.log(data)
        this.historyMessages = data
      })
    },
    toogleMenu () {
      alert(`${URL}`)
    },
    sendMessage () {
      const message = {
        sender: this.dataSender,
        msg: this.chatData,
        receiver: this.dataReceiver,
        image: this.senderImage
      }
      this.chatRoom = [...this.chatRoom, message]

      this.socket.emit('send-message', {
        username: this.dataSender,
        chatData: this.chatData,
        room: this.dataReceiver,
        image: this.senderImage
      })
      this.chatData = ''
      this.setChatPrivate()
    },
    setChatPrivate () {
      const chatPrivate = this.chatRoom.filter((e) => {
        if (this.dataReceiver === '') {
          return e.sender === this.dataReceiver || e.sender === this.dataSender
        } else {
          return (
            e.receiver === this.dataReceiver || e.sender === this.dataReceiver
          )
        }
      })
      this.chatPrivates = chatPrivate
    },

    process (event) {
      this.form.newImages = event.target.files[0]
    },

    updateMessage () {
      const fd = new FormData()
      fd.append('name', this.form.name)
      fd.append('image', this.form.newImages)
      fd.append('bio', this.form.bio)
      fd.append('phone', this.form.phone)
      const data = {
        email: this.dataSender,
        formdata: fd
      }
      this.actionupdateData(data).then((response) => {
        alert('Update data success')
        window.location = '/'
      }).catch((err) => {
        alert(err)
      })
    },
    ...mapActions({
      actionupdateData: 'auth/updateData'
    }),

    onLogout () {
      localStorage.removeItem('token')
      localStorage.removeItem('image')
      localStorage.removeItem('email')
      window.location = '/login'
    }
  },
  mounted () {
    this.socket.emit('get-all-users', [])
    this.socket.on('list-users', (data) => {
      this.listUsers = data
    })
    this.socket.emit('join-room', this.dataSender)

    this.socket.on('private-message', (payload) => {
      // console.log(payload)
      this.chatRoom = [...this.chatRoom, payload]
      if (this.dataReceiver !== null) {
        this.setChatPrivate()
      }
    })
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
}
.btn-important {
  background-color: #7e98df;
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
.menu::-webkit-scrollbar {
  width: 0;
  height: 3px;
}
.menu::-webkit-scrollbar-thumb {
  background-color: gray;
}
.chating {
  position: relative;
}
.side-right {
  height: 110vh !important;
  display: grid;
  grid-template-rows: 1.5fr 6fr 1.5fr;
}
.user-list {
  overflow: scroll;
  height: 70vh;
}
.user-list::-webkit-scrollbar {
  width: 5px;
}
.user-list::-webkit-scrollbar-thumb {
  background-color: gray;
}
.in-chat {
  overflow: scroll;
  background-color: #e6e6e6;
  /* padding: 20px; */
  /* height: 80vh; */
}
.in-chat::-webkit-scrollbar {
  width: 5px;
}
.in-chat::-webkit-scrollbar-thumb {
  background-color: gray;
}
.row-chat p {
  margin-bottom: 0;
}
.bubble-your {
  max-width: 50%;
  padding: 20px;
  background: #7e98df;
  border-radius: 35px 35px 35px 10px;
  color: white;
}
.bubble-me {
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
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
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
