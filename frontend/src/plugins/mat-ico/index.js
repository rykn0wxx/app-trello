import _ from 'lodash'

const MAT_ICO = 'ico'

export default (Vue, options) => {
  const namespace = (options && options.name) || MAT_ICO
  Vue.directive(namespace, {
    bind: function (el, binding) {
      el.innerHTML = _.snakeCase(binding.value.arg)
      el.classList.add('material-icons')
      if (binding.value.color) el.classList.add(binding.value.color)
    }
  })
  Vue.component(namespace, {
    props: {
      name: {
        type: [String]
      },
      size: {
        type: [String, Number],
        default: 24
      },
      color: {
        type: [String]
      }
    },
    render: function (createElement) {
      const elemClass = `${this.color || ''} material-icons`
      return createElement('i', {
        class: _.trim(elemClass),
        domProps: {
          innerHTML: _.snakeCase(this.name)
        },
        style: {
          fontSize: `${this.size}px`
        }
      })
    }
  })
}
