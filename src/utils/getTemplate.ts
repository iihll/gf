import { readFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { cwd, env } from 'process'
import getConfigJson from './getConfigJson'

const TEL_MAP = {
  VUE2_TEMPLATE: `<template>

</template>

<script>
export default {
  
}
</script>
`,
  VUE3_TEMPLATE: `<template>
  
</template>

<script setup lang="ts">

</script>
`,
}

export default function getTemplate(name = 'VUE2_TEMPLATE') {
  const config = getConfigJson()
  let template = TEL_MAP[name]
  const telPath = join(cwd(), './tel.vue')
  if (existsSync(telPath) && config.useTel) {
    template = readFileSync(telPath).toString()
  }

  return template
}
