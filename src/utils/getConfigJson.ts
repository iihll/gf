import { readFileSync, existsSync, writeFileSync } from 'fs'
import { homedir } from 'os'

function exist() {
  const configFilePath = `${homedir}/gfConfig.json`
  return existsSync(configFilePath)
}

const defaultConfig = {
  version: '2',
  open: true,
  suffix: '.vue',
  template: 'VUE3_TEMPLATE',
  useTel: true,
}

export default function getConfigJson(): Config {
  if (exist()) {
    const configJson = readFileSync(`${homedir}/gfConfig.json`, 'utf8')

    return JSON.parse(configJson)
  } else {
    writeFileSync(`${homedir}/gfConfig.json`, JSON.stringify(defaultConfig), 'utf8')
    const configJson = readFileSync(`${homedir}/gfConfig.json`, 'utf8')

    return JSON.parse(configJson)
  }
}
