<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps } from 'vue'
import { Todo } from '../../types/Todo'
import { Filter } from '../../types/Filter'
import { deleteTodo } from '../../api/todos'
import { Error } from '../../types/Error'

const props = defineProps<{
  setTodos: (updater: (prev: Todo[]) => Todo[]) => void
  activeTodos: Todo[]
  completedTodos: Todo[]
  filter: Filter
  setFilter: (filter: Filter) => void
  setErrorMessage: (error: Error) => void
  setDeletingTodoIds: (ids: number[]) => void
}>()

async function handleClearCompleted() {
  const completedTodoIds = props.completedTodos.map(todo => todo.id)
  props.setDeletingTodoIds(completedTodoIds)

  const deletionPromises = props.completedTodos.map(todo =>
  deleteTodo(todo.id)
  .then(() => ({ id: todo.id, success: true }))
  .catch(() => ({ id: todo.id, success: false })),
)

const results = await Promise.all(deletionPromises)

const successfullyDeletedIds = results
.filter(result => result.success)
.map(result => result.id)

props.setTodos(prev =>
prev.filter(todo => !successfullyDeletedIds.includes(todo.id)),
)

const hasErrors = results.some(result => !result.success)
if (hasErrors) {
  props.setErrorMessage(Error.unableToDelete)
  setTimeout(() => {
    props.setErrorMessage(Error.none)
  }, 3000)
}

props.setDeletingTodoIds([])
}
</script>

<style scoped>
.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>

<template>
  <footer class="todoapp__footer" data-cy="Footer">
    <span class="todo-count" data-cy="TodosCounter">
      {{ activeTodos.length }} items left
    </span>

    <!-- Filter navigation -->
    <nav class="filter" data-cy="Filter">
      <a
        v-for="filterOption in Object.values(Filter)"
        :key="filterOption"
        :href="`#/${filterOption.toLowerCase()}`"
        :class="['filter__link', { selected: filter === filterOption }]"
        :data-cy="`FilterLink${filterOption}`"
        @click.prevent="() => setFilter(filterOption)"
      >
        {{ filterOption }}
      </a>
    </nav>

    <!-- Clear completed -->
    <button
      type="button"
      class="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      :disabled="completedTodos.length === 0"
      @click="handleClearCompleted"
    >
      Clear completed
    </button>
  </footer>
</template>
