<template>
  <RouterView class="app page-container antialiased" v-cloak />
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

<style src="./assets/tailwind.css"></style>
