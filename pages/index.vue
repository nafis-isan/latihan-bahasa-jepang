<template>
  <div class="japankanji-app">
    <main id="app" />
    <nav id="nv" />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue'

const stylesheetId = 'japankanji-styles'
const scriptId = 'japankanji-script'

onMounted(async () => {
  await nextTick()

  let stylesheet = document.getElementById(stylesheetId)
  if (!stylesheet) {
    stylesheet = document.createElement('link')
    stylesheet.id = stylesheetId
    stylesheet.rel = 'stylesheet'
    stylesheet.href = '/japankanji.css'
    document.head.appendChild(stylesheet)
  }

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.src = '/japankanji.js'
    script.async = false
    document.body.appendChild(script)
  }
})

onBeforeUnmount(() => {
  document.getElementById(scriptId)?.remove()
  document.getElementById(stylesheetId)?.remove()
})
</script>
