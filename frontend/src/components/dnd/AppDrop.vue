<script>
export default {
  name: 'AppDrop',
  render (createElement) {
    return createElement('div', {
      class: 'app-drop',
      on: {
        drop: function (event) {
          event.stopPropagation()
          const transferData = JSON.parse(event.dataTransfer.getData('payload'))
          this.$emit('drop', transferData)
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
