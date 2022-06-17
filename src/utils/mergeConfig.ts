
import getTemplate from './getTemplate'
import getConfigJson from './getConfigJson'

export function mergeConfig(fileName) {
  const configJson = getConfigJson()
  const template = getTemplate(configJson.template, fileName)

  return {
    ...configJson,
    template
  }
}