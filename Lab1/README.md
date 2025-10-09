# Lab1

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### Some ScreenShots 
<img width="300" height="600" alt="image" src="https://github.com/user-attachments/assets/d2ebf5d6-da96-4905-92f2-c7a437809866" />
<p align="center"><i>ALL todos</i></p>
<img width="300" height="600" alt="image" src="https://github.com/user-attachments/assets/5ef7dea1-5574-4d40-a0ea-abd3c9c945e5" />
<p align="center"><i>Active todos</i></p>
<img width="300" height="600" alt="image" src="https://github.com/user-attachments/assets/21e45659-3a8f-435c-af24-a3e8cc9985c7" />
<p align="center"><i>Completed todos</i></p>

### Functionl

## Delete Todos
```
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
```
## Get Status
```
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
```
