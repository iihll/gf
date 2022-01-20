import { writeFileSync, existsSync } from 'fs'
import getConfigJson from '../utils/getConfigJson'
import { homedir } from 'os'

const CONFIG_MAP = {
  open: (value: string) => {
    return value === 'true'
  },
  get: () => {
    console.log('')
    console.log(getConfigJson())
    console.log('')
  },
}

export default function config(args: string[], config: Config) {
  const configJson = getConfigJson()
  const key = args[1]
  const value = args[2]
  configJson[key] = CONFIG_MAP[key](value)
  if (value) {
    writeFileSync(`${homedir}/gfConfig.json`, JSON.stringify(configJson), 'utf8')

    return 'Complete configuration'
  }

  return 'Please input config_item value'
}
