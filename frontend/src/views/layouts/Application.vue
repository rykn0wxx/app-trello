<template>
  <div class="layouts-application relative min-h-full h-full w-full overflow-hidden">
    <main class="layouts-application__main layout-column flex">
      <MudToolbar />
      <mud-content class="layout-column flex" :md-scroll-y="true">
        <MudView class="layout-padding flex-noshrink relative block lg:px-32 px-6 lg:py-0 py-2" />
      </mud-content>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutsApplication'
}
</script>

<style lang="scss" scoped>
</style>
