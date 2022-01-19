import generate from './generate'
import help from './help'
import ui from './ui'
import version from './version'
import config from './config'

export const COMMANDS: Record<string, Function> = {
  version,
  '-v': version,
  g: generate,
  gen: generate,
  generate,
  '-?': help,
  help: help,
  '-h': help,
  '-help': help,
  '--help': help,
  ui,
  config
}
