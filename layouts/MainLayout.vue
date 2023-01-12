<template>
   <div class="container">
      <aside class="side-bar">
         <UiLogo></UiLogo>
      </aside>
      <main class="main-box">
            <slot />
      </main>
   </div>
</template>

<script>
export default {
    name: "main-layout",
   //  components: { UiMYLogo }
}
</script>

<style lang="scss" scoped>
.container{
   padding: 0 2rem;
   display: flex;
   border: 1px solid #000;
   height: 100%;
}
.side-bar{
   height: 100vh;
   border-right: 1px solid #D9E1E7;
   padding: 2rem;
}
.main-box{
   width: 100%;
   display: flex;
   flex-direction: column;
}
</style>