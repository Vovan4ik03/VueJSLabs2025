<template>
  <li
    :class="['todo', { completed: completed, editing: isEditing, 'is-deleting': isDeleting }]"
    data-cy="Todo"
  >
    <div class="view">
      <input
        data-cy="TodoStatus"
        class="toggle"
        type="checkbox"
        :checked="completed"
        @change="toggleStatus"
      />

      <label data-cy="TodoTitle" @dblclick="startEditing">{{ title }}</label>

      <button
        data-cy="TodoDeleteButton"
        class="destroy"
        @click="deleteTodoItem"
        :disabled="isDeleting"
      ></button>
    </div>

    <input
      v-if="isEditing"
      data-cy="TodoTitleField"
      class="edit"
      type="text"
      v-model="editedTitle"
      @keyup.enter="saveEditedTitle"
      @blur="saveEditedTitle"
    />
  </li>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ref, watch } from 'vue'
import { Todo } from '../../types/Todo'
import { Error } from '../../types/Error'
import { deleteTodo, updateTodo } from '../../api/todos'

const props = defineProps<{
  id: number
  title: string
  completed: boolean
  setTodos: (updater: (prev: Todo[]) => Todo[]) => void
  setErrorMessage: (error: Error) => void
  isInputLoading: boolean
  deletingTodoIds: number[]
}>()

// ---- local state ----
const isEditing = ref(false)
const editedTitle = ref(props.title)
const isDeleting = ref(false)

// ---- methods ----
async function toggleStatus() {
  const updated = { ...props, completed: !props.completed }

  props.setTodos(prev =>
    prev.map(todo => (todo.id === props.id ? { ...todo, completed: updated.completed } : todo)),
  )

  try {
    await updateTodo(updated)
  } catch {
    props.setErrorMessage(Error.unableToUpdate)
    setTimeout(() => props.setErrorMessage(Error.none), 3000)
  }
}

function startEditing() {
  isEditing.value = true
  editedTitle.value = props.title
}

async function saveEditedTitle() {
  const newTitle = editedTitle.value.trim()
  if (!newTitle) {
    await deleteTodoItem()
    return
  }

  if (newTitle === props.title) {
    isEditing.value = false
    return
  }

  try {
    const updated = { id: props.id, title: newTitle, completed: props.completed }
    await updateTodo(updated)

    props.setTodos(prev =>
      prev.map(todo => (todo.id === props.id ? { ...todo, title: newTitle } : todo)),
    )
  } catch {
    props.setErrorMessage(Error.unableToUpdate)
    setTimeout(() => props.setErrorMessage(Error.none), 3000)
  } finally {
    isEditing.value = false
  }
}

async function deleteTodoItem() {
  isDeleting.value = true

  try {
    await deleteTodo(props.id)
    props.setTodos(prev => prev.filter(todo => todo.id !== props.id))
  } catch {
    props.setErrorMessage(Error.unableToDelete)
    setTimeout(() => props.setErrorMessage(Error.none), 3000)
  } finally {
    isDeleting.value = false
  }
}
</script>

