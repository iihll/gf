
import defaultConfig from '../../defaultConfig'
import getTemplate from './getTemplate'

export function mergeConfig() {
  const template = getTemplate()

  return {
    ...defaultConfig,
    template: template.toString()
  }
}