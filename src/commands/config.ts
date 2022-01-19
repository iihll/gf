import { writeFileSync } from 'fs'
import getConfigJson from "../utils/getConfigJson";
import { homedir } from 'os'

const CONFIG_MAP = {
  open: (value: string) => {
    return value === 'true'
  }
}

export default function config(args: string[], config: Config) {
  const configJson = getConfigJson()
  const key = args[1]
  const value = args[2]
  configJson[key] = CONFIG_MAP[key](value)
  writeFileSync(`${homedir}/config.json`, JSON.stringify(configJson), 'utf8')

  return 'Complete configuration'
}