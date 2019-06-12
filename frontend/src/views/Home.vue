<template>
  <div class="home flex h-64">
    <h1 class="md-title">
      I am home
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggleState () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/animations';

.test-run-enter-active, .test-run-leave-active {
    transition-duration: 10s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}
.test-run-leave-to, .test-run-enter {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
</style>
