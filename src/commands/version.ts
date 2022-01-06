import { readFileSync } from 'fs'
import { resolve } from 'path'

export default function version() {
  const packageJson = readFileSync(resolve(__dirname, '../package.json'))
  return JSON.parse(packageJson.toString()).version
}