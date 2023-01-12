<template>
   <div class="container">
      <aside class="side-bar">
         <UiLogo></UiLogo>
      </aside>
      <main class="main-box">
         <header class="main-box__header"></header>
         <section class="main">
            <slot />
         </section>
      </main>
   </div>
</template>

<script>
export default {
   name:'customer-layout'
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
}
.main-box{
   width: 100%;
   display: flex;
   flex-direction: column;
   border: 1px solid red;
}

.main-box__header{
   border: 1px solid blue;
}

.main{
   border: 1px solid rgb(26, 192, 11);
}

</style>