import { sep } from 'path'
import { getDict } from '.'

export function getFileName(args: string[], hasSep = true) {
  const filePath = args[1]
  const dict = getDict(filePath)
  const fileName = hasSep ? sep + (dict[dict.length - 1] || 'index') : (dict[dict.length - 1] || 'index') // 获取路径的最后一个作为文件名，若无则默认文件名为 index

  return fileName === 'index' ? dict[dict.length - 2] : fileName
}