import { writeFileSync } from 'fs'
import { execSync } from 'child_process'

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

  if (fileName) {
    const finalPath = cwd + '/' + fileName + '.vue'
    const template = DEFAULT_TEL

    writeFileSync(finalPath, template)
    execSync('code ' + finalPath)
    return 'File created successfully'
  }

  return 'Generate your vue file for using GF'
}