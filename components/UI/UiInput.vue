<template>

    <input class="input" v-model="value">
  
</template>

<script>
  export default {
    name:'my-input',
    data(){
      return{
        value:''
      }
    }
  }
</script>

<style lang="scss" scoped>
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

</style>