import generate from './generate'
import help from './help'
import version from './version'

export const COMMANDS: Record<string, Function> = {
  version: version,
  '-v': version,
  g: generate,
  gen: generate,
  generate: generate,
  '-?': help,
  help: help,
  '-h': help,
  '-help': help,
  '--help': help,
}
