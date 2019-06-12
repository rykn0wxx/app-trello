<template>
  <RouterView class="app page-container relative min-h-full h-full w-full overflow-hidden antialiased" v-cloak />
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'Dashboard by mudhead'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
