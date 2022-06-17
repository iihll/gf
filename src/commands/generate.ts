import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'
import { sep, resolve } from 'path'
import { getFileName } from '../utils/getFileName'


type Msg = string

export default function generate(args: string[], config: Config): Msg {
  const { template, open, suffix } = config

  const filePath = args[1]
  let dict: string | string[] = filePath.split(/\\|\//)
  const fileName = getFileName(args)
  const cwd = process.cwd()
  dict.pop() // 去掉路径最后一个
  dict = resolve(cwd, dict.join(sep))
  if (!existsSync(dict)) {
    mkdirSync(dict, { recursive: true })
  }
  const finalPath = dict + fileName + suffix

  if (finalPath) {
    writeFileSync(finalPath, template)
    if (open) {
      execSync('code -g ' + finalPath + ':2:3')
    }
    return 'File created successfully'
  }

  return 'Generate your vue file for using GF'
}
