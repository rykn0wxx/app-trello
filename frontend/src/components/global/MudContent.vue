<script>
export default {
  name: 'MudContent',
  props: {
    mdScrollY: {
      type: Boolean,
      default: false
    },
    mdScrollX: {
      type: Boolean,
      default: false
    }
  },
  render (createElement) {
    return createElement('div', {
      class: {
        'md-content': true,
        'md-scroll-y': this.mdScrollY,
        'md-scroll-x': this.mdScrollX
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.md-content {
  display: block;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  &.md-scroll-y {
    overflow-y: auto;
    overflow-x: hidden;
  }
  &.md-scroll-x {
    overflow-x: auto;
    overflow-y: hidden;
  }
  @media print {
    overflow: visible !important;
  }
}
</style>
