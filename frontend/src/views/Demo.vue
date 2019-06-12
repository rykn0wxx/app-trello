<template>
  <div class="demo">
    <h1 class="md-title">
      I am Demo
    </h1>
    <div class="layout-column flex layout-padding">
      <div class="flex">
        <ico name="line-style" color="text-red-500" size="32"></ico>
      </div>
      <div class="flex">
        <i v-ico="{ arg: 'credit-card', color: 'text-blue-400' }"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo'
}
</script>

<style lang="scss" scoped>
</style>
