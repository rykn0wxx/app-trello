<template>
  <app-drop class="column-task" @drop="moveTaskOrColumn">
    <app-drag class="task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex}"
        @click="gotoTask(task)">
      <span class="w-full flex-no-shrink font-bold">
        {{ task.name }}
      </span>
      <p v-show="task.description" class="w-full flex-no-shrink mt-1 text-sm">
        {{ task.description }}
      </p>
    </app-drag>
  </app-drop>
</template>

<script>
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import { MoveTaskColumnMixin } from '@/services/utils'

export default {
  name: 'ColumnTask',
  components: { AppDrop, AppDrag },
  mixins: [ MoveTaskColumnMixin ],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    gotoTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
