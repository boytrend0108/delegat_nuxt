<template>
  <div class="form-offer">
    <img src="@/assets/images/handshake.svg" alt="handshake">
    <div class="offer">
      <p to="/register" class="form__question grey"> Хотите сотрудничать с нами ?</p>
      <router-link to="/register" class="form__question"> Зарегистрироваться как партнёр</router-link>
    </div>
  </div>
</template>

<script>
  export default { 
    
  }
</script>

<style lang="scss" scoped>
.form-offer{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.offer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.form__question{
 @include form__question;
}

.form__question:hover{
    text-decoration: underline;
  }
.grey{
  color:grey;
}
</style>