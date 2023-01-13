<template>
  <NuxtLayout :name="layout">
    <UiDialog>
      <FormReg></FormReg>
   </UiDialog>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      layout: "main-layout"
    }
  }
}
</script>

<style lang="scss" scoped>

</style>