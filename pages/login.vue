<template>
  <NuxtLayout :name="layout">
    <UiDialog>
      <FormLogin></FormLogin>
    </UiDialog>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return{
      layout:'main-layout'
    }
  },
  mounted() {
  
  },
};
</script>