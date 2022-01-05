import { writeFileSync } from 'fs'

const DEFAULT_TEL = `<template>
  
</template>

<script>
export default {
  
}
</script>
`

export default function generate(args: string[]) {
  const fileName = args[1]
  const cwd = process.cwd()
  const finalPath = cwd + '/' + fileName + '.vue'
  const template = DEFAULT_TEL

  writeFileSync(finalPath, template)
  return 'File created successfully'
}