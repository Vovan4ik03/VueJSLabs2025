<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content has-text-centered">
          <figure class="image is-3by2">
            <img src="https://picsum.photos/seed/ad/800/400" alt="Реклама">
          </figure>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
