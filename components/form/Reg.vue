<template>
  <div>
    <form class="form" id="reg-form" @submit.prevent='onSubmit'>
      <h2 class="form-title">Регистрация</h2>
      <ValidationErrors v-if='validationErrors' :validation-errors='validationErrors' />

      <div class="input-box">
        <label for="name" class="form-label">ФИО</label>
        <UiInput type="text" id="name" v-model.trim='username' @input="validations" :class="{ invalid: !isValid }" />
        <p>Иванов Иван Иванович</p>
      </div>

      <div class="input-box">
        <label for="email" class="form-label">E-mail</label>
        <UiInput type="email" id="email" v-model.trim='email' @input="validations" :class="{ invalid: !isValid }" />
        <p>ggg@ff.jj</p>
      </div>

      <div class="input-box">
        <label for="password" class="form-label">Пароль</label>
        <UiInput type="password" class="input" id="password_1" v-model.trim='password' @input="validations"
          :class="{ invalid: !isValid }" />
          <ClientOnly>
            <font-awesome-icon v-if="showPass1" icon="fa-solid fa-eye" class="icon" @click="showPassword('1')" />
            <font-awesome-icon icon="fa-solid fa-eye-slash" class="icon" @click="showPassword('1')" v-if="!showPass1" />
          </ClientOnly>
       
        <p>abcABC123$</p>
      </div>

      <div class="input-box">
        <label for="phone" class="form-label">Повторите пароль</label>
        <UiInput type="password" id="password_2" v-model.trim='password_2' @input="validations"
          :class="{ invalid: !isValid }">
        </UiInput>
        <ClientOnly>
          <font-awesome-icon v-if="showPass2" icon="fa-solid fa-eye" class="icon" @click="showPassword('2')" />
          <font-awesome-icon icon="fa-solid fa-eye-slash" class="icon" @click="showPassword('2')" v-if="!showPass2" />
        </ClientOnly>      
      </div>

      <UiButton type="submit" class="btn" :class="{ BtnEnable: !isBtnEnable }">Зарегистрироваться</UiButton>
    </form>
    <div class="question-box">
      <NuxtLink to="/login" class="form__question"> Уже есть аккaунт?</NuxtLink>
    </div>

    <FormOffer />
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'form-reg',
  data() {
    return {
      isValid: true,
      isBtnEnable:true,
      showPass1: true,
      showPass2: true,
      username:'',
      email:'',
      password: '',
      password_2: '',
      username_reg: /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/,
      email_reg:  /.+@.+\..+/i,
      password_reg: /(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*].{8,}/g,
    }
  },
  
  components: {
   McvValidationErrors
  },
 
  computed:{
   ...mapGetters(['isSubmitting',"validationErrors" ])
  },

  methods: {
    ...mapActions([
     'registration', 'login'
    ]),

    validations() {
     const btn =  document.querySelector('.btn')
     console.log(this.password === this.password_2)
     btn.setAttribute('disabled', 'disabled')
      if ((this.password === this.password_2) && (this.username_reg.test(this.username)) && ( this.email_reg.test(this.email)) )
        // this.username_reg.test(this.username) &&
        // this.email_reg.test(this.email) &&
        // RegTest === true && 
          { 
             this.isValid = true
             this.isBtnEnable = true
             btn.removeAttribute('disabled')
           } else {
             this.isValid = false
             this.isBtnEnable = false
            }          
    },

  showPassword(id) {  
      const firstPassword = document.getElementById('password_1')
      const secondPassword = document.getElementById('password_2')
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
      else if (id === "2") {
        if (secondPassword.attributes.type.textContent === 'password') {
            secondPassword.attributes.type.textContent = 'text';
            this.showPass2 = !this.showPass2
            return
        } else {
          secondPassword.attributes.type.textContent = 'password';
          this.showPass2 = !this.showPass2
        }
      }
    },

    onSubmit() {
      this.validations();
      let data = {
        full_name: this.username,
        email: this.email,
        password: this.password,
        password_2: this.password_2,
      }
     
      this.registration(data)
        .then(user => {
        console.log('successfully register user', user)
        this.$router.push('/login')
      })
    }
  },
}
</script>

<style lang="scss" scoped>
form{
  @include form;
}

.form-title{
  @include form-title;
}
.form-label {
  margin: 0.5rem 0;
  color: #809fb8;
  display: inline;
  font-size: 1.3rem;
  font-weight: 600;
}

.input-box{
  @include input-box;
  position: relative;
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
  .input{
  width: 100%;
  border: 2px solid #D9E1E7;
  border-radius: 10px;
  background-color: #fff;
  color: #06152b;
  display: block;
  font-family: Raleway,system-ui,-apple-system,sans-serif;
  font-size: 1.3rem;
  line-height: 1.5;
  padding: 0.7rem 1.25rem;
  outline: none;
 
}
.icon{
  position:absolute;
  top: 4.1rem;
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