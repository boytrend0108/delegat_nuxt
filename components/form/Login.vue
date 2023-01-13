<template>
  <form 
    class="form" 
    id="login-form"
    @submit.prevent='onSubmit'
    >
    <h2 class="form-title">Вход</h2>

    <div class="input-box">
      <label for="email" class="form-label">E-mail</label>
      <UiInput
        type="email" 
        id="email" 
        @input="validations"
        :class="{ invalid:!isValid }"
        v-model.trim='email'
        />
        <p>ggg@ff.jj</p>
    </div>

    <div class="input-box">
      <label for="password" class="form-label">Пароль</label>
      <UiInput 
       type="password"
        class="input"
        id="password_1" 
        v-model.trim='password'
        @input="validations"
        :class="{ invalid:!isValid }"  />
      <font-awesome-icon
        v-show="showPass1"
        icon="fa-solid fa-eye"
        class="icon"
        @click="showPassword('1')"
        />
        <font-awesome-icon 
          icon="fa-solid fa-eye-slash" 
          class="icon"  
          @click="showPassword('1')"
          v-show="!showPass1" />
          <p>abcABC123$</p>
    </div>

    <UiButton 
    type="submit" 
    class="btn"
    :class="{ BtnEnable:!isBtnEnable }"
    >Войти</UiButton>
  </form>
  <div class="question-box">
    <NuxtLink to="/registration" class="form__question"> Eще нет аккaунта?</NuxtLink>
    <NuxtLink to="/registration" class="form__question"> Забыли пароль?</NuxtLink>
    <FormOffer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {

  data() {
    return {
      isValid: true,
      isBtnEnable: true,
      showPass1: true,
      email: '',
      password: '',
      email_reg: /.+@.+\..+/i,
      password_reg: /(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*].{8,}/g,
    }
  },
  methods: {
    showPassword(id) {
      const firstPassword = document.getElementById('password_1')
      if (id === "1") {
        if (firstPassword.attributes.type.textContent === 'password') {
          firstPassword.attributes.type.textContent = 'text'
          this.showPass1 = !this.showPass1
          return
        }
        if (firstPassword.attributes.type.textContent === "text") {
          firstPassword.attributes.type.textContent = 'password';
          this.showPass1 = !this.showPass1
        }
      }
    },

    validations() {
      const btn = document.querySelector('.btn')
      btn.setAttribute('disabled', 'disabled')
      if (
        this.email_reg.test(this.email) &&
        this.password_reg.test(this.password)
      ) {
        this.isValid = true
        this.isBtnEnable = true
        btn.removeAttribute('disabled')
      } else {
        this.isValid = false
        this.isBtnEnable = false
      }
    },
     ...mapActions([
      'LOGIN'
     ]),

    onSubmit() {
      this.validations();
      let data = {
        email: this.email,
        password: this.password,
      }
      this.LOGIN(data)
        .then(user => {
        console.log('successfully sing in', user)
        this.$router.push('/')
      })
    }
  },
    
  }
</script>

<style lang="scss" scoped>

.form{
  @include form;
}

.form-title{
  @include form-title;
}
.input-box{
  @include input-box;
  position: relative;
}
.form-label {
  margin: 1rem 0;
  color: #809fb8;
  display: inline;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.btn{
 @include btn;
}

.form__question{
 @include form__question;
}
.form__question:hover{
    text-decoration: underline;
  }
  .question-box{
   @include question-box;
  }

  .icon{
  position:absolute;
  top: 4.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color:$main-color;
  cursor: pointer;
}

.invalid{
  border: 1px solid red;
}
.BtnEnable{
  opacity: 0.5;
  cursor:not-allowed
}
</style>