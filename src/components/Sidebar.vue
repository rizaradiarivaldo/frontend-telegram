<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Sidebar'
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

.notice {
  color: white;
  background-color: blue;
  border-radius: 20px;
  text-align: center;
  width: 20px !important;
}
@media (max-width: 576px) {
  .profile {
    display: none;
  }
}
</style>
