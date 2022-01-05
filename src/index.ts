#!/usr/bin/env node

import generate from "./commands/generate"
import help from "./commands/help"
import version from "./commands/version"

const COMMANDS: Record<string, Function> = {
  'version': version,
  '-v': version,
  'g': generate,
  'gen': generate,
  'generate': generate,
  '-?': help,
  'help': help,
  '-h': help,
  '-help': help,
  '--help': help,
}

function main(args: string[]) {
  let result = null
  if (args.length) {
    result = COMMANDS[args[0]](args)
  } else {
    result = COMMANDS['help']()
  }

  console.log(result)
}

main(process.argv.slice(2))