<template>
  <ul class="todo-list" data-cy="TodoList">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :completed="todo.completed"
      :setTodos="setTodos"
      :setErrorMessage="setErrorMessage"
      :isInputLoading="false"
      :deletingTodoIds="deletingTodoIds"
    />
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Todo } from '../../types/Todo'
import { Error } from '../../types/Error'
import TodoItem from './TodoItem'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  todos: Todo[]
  setTodos: (updater: (prev: Todo[]) => Todo[]) => void
  setErrorMessage: (error: Error) => void
  deletingTodoIds: number[]
}>()
</script>


