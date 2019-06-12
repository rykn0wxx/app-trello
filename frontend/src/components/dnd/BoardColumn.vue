<template>
  <app-drop class="board-column" @drop="moveTaskOrColumn">
    <app-drag class="column" :transferData="{
      type: 'column',
      fromColumnIndex: columnIndex}">
      <div class="flex items-center mb-2 font-bold">
        {{ column.name }}
      </div>
      <div class="list-reset">
        <ColumnTask class="board-column_column-task"
          v-for="(task, $taskIndex) in column.tasks"
          :key="$taskIndex"
          :task="task"
          :taskIndex="$taskIndex"
          :column="column"
          :columnIndex="columnIndex"
          :board="board" />
        <input class="block p-2 w-full bg-transparent"
          type="text"
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, column.tasks)" />
      </div>
    </app-drag>
  </app-drop>
</template>

<script>
import ColumnTask from './ColumnTask'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import { MoveTaskColumnMixin } from '@/services/utils'

export default {
  name: 'BoardColumn',
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [ MoveTaskColumnMixin ],
  methods: {
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      e.target.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
