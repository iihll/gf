import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
import { homedir } from 'os'
import getConfigJson from './getConfigJson'

const TEL_MAP = {
  VUE2_TEMPLATE: `<template>

</template>

<script>
export default {
  
}
</script>
`,
  VUE3_TEMPLATE: (fileName: string) => {
    return `<template>
  
</template>

<script lang="ts">
export default {
  name: '${fileName}'
}
</script>

<script setup lang="ts">

</script>
`
  },
}

export default function getTemplate(name = 'VUE2_TEMPLATE') {
  const config = getConfigJson()
  let template = TEL_MAP[name](name)
  const telPath = join(cwd(), './tel.vue')
  if (existsSync(telPath) && config.useTel) {
    template = readFileSync(telPath).toString()
  }

  return template
}
