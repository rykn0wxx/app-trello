<template>
  <div class="layouts-application bg-gray-300">
    <MudToolbar />
    <main class="layouts-application__main relative block lg:px-32 px-6 lg:py-0 py-2 h-full w-full">
      <transition :name="direction" appear>
        <RouterView />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutsApplication',
  data () {
    return {
      direction: 'slide-left',
      currentIndex: null
    }
  },
  created () {
    this.currentIndex = this.$route.meta.pathIndex
  },
  watch: {
    '$route': {
      handler: 'routeHandler',
      immediate: true
    }
  },
  methods: {
    routeHandler (newVal, oldVal) {
      if (this.currentIndex) {
        this.direction = (this.currentIndex > newVal.meta.pathIndex) ? 'slide-right' : 'slide-left'
      }
      this.currentIndex = newVal.meta.pathIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-left, .slide-right {
  &-enter-active, &-leave-active {
    transition-property: opacity, transform, visibility;
    transition-timing-function: ease-in-out;
  }
  &-enter-active {
    transition-duration: 1s;
  }
  &-leave-active {
    position: absolute !important;
    min-width: 100%;
    transition-duration: 1.5s;
  }
}
.slide-left {
  &-enter {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
  &-enter-to {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  &-leave {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  &-leave-to {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}
.slide-right {
  &-enter {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
  &-enter-to {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  &-leave {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  &-leave-to {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
