import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { cwd, env } from 'process'

export default function getTemplate() {
  const template = readFileSync(join(cwd(), './tel.vue'))

  return template
}