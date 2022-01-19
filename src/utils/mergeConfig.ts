
import getTemplate from './getTemplate'
import getConfigJson from './getConfigJson'

export function mergeConfig() {
  const configJson = getConfigJson()
  const template = getTemplate(configJson.template)

  return {
    ...configJson,
    template
  }
}