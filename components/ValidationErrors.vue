<template>
  <ul class='error-messages'>
    <li class="li" v-if='validationErrors'>
      {{ errorMessages }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 
  computed: {

    ...mapGetters([
      'validationErrors'
    ]),

    errorMessages() {
      console.log("проверка compunted", this.validationErrors)
        // const errorMessage = "Пароль менее 8 символов"
        const errorMessage = this.validationErrors
        return errorMessage
    }
  }
}
</script>

<style lang="scss" scoped>
   .li{
      list-style-type: none;
      font-size: 1.5rem;
      color:red;
      padding: 1rem;
   }
</style>