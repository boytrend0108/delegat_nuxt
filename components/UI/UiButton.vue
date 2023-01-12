<template>
 
  <button class="btn">
    <slot></slot>
  </button>
 
</template>

<script>
  export default {
    name:'my-button'
  }
</script>

<style lang="scss" scoped>

.btn{
  background-color: $btn-color;
  color: #fff;
  border-radius: 1rem;
  border: none;
  width: 100%;
  cursor: pointer;
  padding: 1.2rem;
  font-size: 2rem;
  transition: 0.6s;
}

.btn:hover{
    background-color: blue;
  }

</style>