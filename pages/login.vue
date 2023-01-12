<template>
    <NuxtLayout :name="layout">
      <my-dialog>
      <form-login></form-login>
    </my-dialog>
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
    console.log(this.$store.state.count);
  },
};
</script>