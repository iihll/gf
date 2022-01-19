import { readFileSync } from "fs";
import { homedir } from 'os'

export default function getConfigJson(): Config {
  const configJson = readFileSync(`${homedir}/config.json`, 'utf8')

  return JSON.parse(configJson)
}