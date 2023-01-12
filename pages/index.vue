<template>

  <NuxtLayout :name="layout">
    <h1>Hello Vue!!!</h1>
  </NuxtLayout>
  
</template>

<script>
  export default {
    data(){
      return{
         layout: "main-layout"
  }
      }
    }
   
</script>

<style lang="scss" scoped>

</style>