<template>
  <div class="todoapp">
    <h1 class="todoapp__title">todos</h1>

    <div class="todoapp__content">
      <Header
        :todos="todos"
        :setTodos="setTodos"
        :completedTodos="completedTodos"
        :textField="textField"
        :setErrorMessage="setErrorMessage"
        :query="query"
        :setQuery="setQuery"
        :isInputLoading="isInputLoading"
        :setIsInputLoading="setIsInputLoading"
        :setTempTodo="setTempTodo"
      />

      <section class="todoapp__main" data-cy="TodoList">
        <TodoList
          :todos="filteredTodos"
          :setTodos="setTodos"
          :setErrorMessage="setErrorMessage"
          :deletingTodoIds="deletingTodoIds"
        />

        <TodoItem
          v-if="tempTodo"
          :id="tempTodo.id"
          :title="tempTodo.title"
          :completed="tempTodo.completed"
          :setTodos="setTodos"
          :setErrorMessage="setErrorMessage"
          :isInputLoading="isInputLoading"
          :deletingTodoIds="deletingTodoIds"
        />
      </section>

      <Footer
        v-if="todos.length"
        :setTodos="setTodos"
        :activeTodos="activeTodos"
        :completedTodos="completedTodos"
        :setErrorMessage="setErrorMessage"
        :filter="filter"
        :setFilter="setFilter"
        :setDeletingTodoIds="setDeletingTodoIds"
      />
    </div>

    <ErrorNotification
      :errorMessage="errorMessage"
      :setErrorMessage="setErrorMessage"
    />
  </div>

  <UserWarning v-if="!todoService.USER_ID" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { UserWarning } from './UserWarning.vue'
import * as todoService from './api/todos'
import { Todo } from './types/Todo'
import { Filter } from './types/Filter'
import { Error } from './types/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import ErrorNotification from './components/ErrorNotification.vue'

// ----- State -----
const todos = ref<Todo[]>([])
const isInputLoading = ref(false)
const errorMessage = ref(Error.none)
const filter = ref(Filter.ALL)
const tempTodo = ref<Todo | null>(null)
const query = ref('')
const deletingTodoIds = ref<number[]>([])
const textField = ref<HTMLInputElement | null>(null)

// ----- Computed -----
const completedTodos = computed(() => todos.value.filter(t => t.completed))
const activeTodos = computed(() => todos.value.filter(t => !t.completed))

const filteredTodos = computed(() => {
  switch (filter.value) {
    case Filter.Completed:
      return completedTodos.value
    case Filter.Active:
      return activeTodos.value
    default:
      return todos.value
  }
})

// ----- Methods -----
function setTodos(updater: (prev: Todo[]) => Todo[]) {
  todos.value = updater(todos.value)
}

function setErrorMessage(error: Error) {
  errorMessage.value = error
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setFilterValue(f: Filter) {
  filter.value = f
}

function setDeletingTodoIds(ids: number[]) {
  deletingTodoIds.value = ids
}

function setQuery(q: string) {
  query.value = q
}

function setIsInputLoading(val: boolean) {
  isInputLoading.value = val
}

function setTempTodo(todo: Todo | null) {
  tempTodo.value = todo
}

// ----- Lifecycle -----
onMounted(async () => {
  try {
    const loadedTodos = await todoService.getTodos()
    todos.value = loadedTodos
  } catch {
    setErrorMessage(Error.unableToLoad)
  } finally {
    setTimeout(() => setErrorMessage(Error.none), 3000)
  }
})

// Focus input field after todos change
watch([isInputLoading, todos], () => {
  if (textField.value) {
    textField.value.focus()
  }
})
</script>
