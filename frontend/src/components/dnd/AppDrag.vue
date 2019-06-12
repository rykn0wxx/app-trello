<script>
export default {
  name: 'AppDrag',
  render: function (createElement) {
    return createElement('div', {
      class: 'app-drag',
      attrs: {
        draggable: true
      },
      on: {
        dragstart: function (event) {
          if (event.target !== event.currentTarget) return
          event.dataTransfer.effectAllowed = 'move'
          event.dataTransfer.dropEffect = 'move'
          event.dataTransfer.setData('payload', JSON.stringify(this.transferData))
        },
        dragover: function (event) {
          event.preventDefault()
        },
        dragenter: function (event) {
          event.preventDefault()
        }
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
</style>
