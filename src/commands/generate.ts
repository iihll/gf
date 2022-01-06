import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'
import { sep, resolve } from 'path'

const DEFAULT_TEMPLATE = `<template>
  
</template>

<script>
export default {
  
}
</script>
`

export default function generate(args: string[]): string {
  const filePath = args[1]
  let dict: string | string[] = filePath.split(/\\|\//)
  const fileName = sep + dict.pop()
  const suffix = '.vue'
  const cwd = process.cwd()
  dict = resolve(cwd, dict.join(sep))
  if (!existsSync(dict)) {
    mkdirSync(dict, { recursive: true })
  }
  const finalPath = dict + fileName + suffix

  if (finalPath) {
    const template = DEFAULT_TEMPLATE

    writeFileSync(finalPath, template)
    execSync('code -g ' + finalPath + ':2:3')
    return 'File created successfully'
  }

  return 'Generate your vue file for using GF'
}
