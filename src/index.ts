import { COMMANDS } from './commands'
import { getFileName } from './utils/getFileName'
import { mergeConfig } from './utils/mergeConfig'

function main(args: string[]) {
  let result = null
  if (args && args.length > 1) {
    if (COMMANDS[args[0]]) {
      const fileName = getFileName(args, false)
      const config = mergeConfig(fileName)
      result = COMMANDS[args[0]](args, config)
    }
  } else {
    result = COMMANDS['help'](args)
  }

  console.log(result)
}

main(process.argv.slice(2))
