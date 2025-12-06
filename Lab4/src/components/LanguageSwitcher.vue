<template>
  <div class="lang-switcher">
    <button
      v-for="lang in langs"
      :key="lang"
      class="lang-btn"
      :class="{ 'lang-btn--active': currentLocale === lang }"
      @click="changeLocale(lang)"
    >
      {{ t(`lang.${lang}`) }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '../stores/settings'

const { locale, t } = useI18n()
const settingsStore = useSettingsStore()

const langs = ['ua', 'en']

const currentLocale = computed(() => locale.value)

function changeLocale(lang) {
  locale.value = lang
  settingsStore.setLocale(lang)
}
</script>
