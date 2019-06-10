<template>
  <RouterView class="app bg-gray-200 text-gray-900 relative min-h-full h-full w-full overflow-hidden antialiased" v-cloak />
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
