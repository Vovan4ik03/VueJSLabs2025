<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="todoapp__header">
    <button
      v-if="todos.length > 0"
      type="button"
      class="todoapp__toggle-all"
      :class="{ active: todos.length === completedTodos.length }"
      data-cy="ToggleAllButton"
      @click="handleToggleAll"
    ></button>

    <form @submit.prevent="handleSubmit">
      <input
        data-cy="NewTodoField"
        type="text"
        class="todoapp__new-todo"
        placeholder="What needs to be done?"
        ref="textField"
        v-model="query"
        :disabled="isInputLoading"
      />
    </form>
  </header>
</template>


<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { Todo } from '../../types/Todo'
import { Error } from '../../types/Error'
import { USER_ID, addTodo, updateTodo } from '../../api/todos'

const props = defineProps<{
  todos: Todo[]
  setTodos: (updater: (prev: Todo[]) => Todo[]) => void
  completedTodos: Todo[]
  textField: HTMLInputElement | null
  setErrorMessage: (error: Error) => void
  query: string
  setQuery: (query: string) => void
  isInputLoading: boolean
  setIsInputLoading: (isLoading: boolean) => void
  setTempTodo: (tempTodo: Todo | null) => void
}>()

// eslint-disable-next-line vue/no-dupe-keys
const textField = ref<HTMLInputElement | null>(null)

async function handleSubmit() {
  if (!props.query.trim()) {
    props.setErrorMessage(Error.titleShouldNotBeEmpty)
    setTimeout(() => props.setErrorMessage(Error.none), 3000)
    return
  }

  const newTodo: Todo = {
    id: 0,
    userId: USER_ID,
    title: props.query.trim(),
    completed: false,
  }

  props.setIsInputLoading(true)
  props.setTempTodo(newTodo)

  try {
    const response = await addTodo(newTodo)
    props.setTodos(prev => [...prev, response])
    props.setTempTodo(null)
    props.setQuery('')
  } catch {
    props.setErrorMessage(Error.unableToAdd)
    setTimeout(() => props.setErrorMessage(Error.none), 3000)
  } finally {
    props.setIsInputLoading(false)
    props.setTempTodo(null)
  }
}


async function handleToggleAll() {
  const areAllCompleted = props.todos.every(todo => todo.completed)

  const todosToUpdate = areAllCompleted
  ? props.todos
  : props.todos.filter(todo => !todo.completed)

  const updatedTodos = todosToUpdate.map(todo => ({
    ...todo,
    completed: !areAllCompleted,
  }))

  props.setTodos(current =>
  current.map(todo => updatedTodos.find(t => t.id === todo.id) || todo),
)

  try {
    const updatedFromServer = await Promise.all(updatedTodos.map(todo => updateTodo(todo)))
    props.setTodos(current =>
    current.map(todo => updatedFromServer.find(t => t.id === todo.id) || todo),
  )
  } catch {
    props.setTodos(props.todos)
    props.setErrorMessage(Error.unableToUpdate)
    setTimeout(() => props.setErrorMessage(Error.none), 3000)
  }
}
</script>

