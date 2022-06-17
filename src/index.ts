import { COMMANDS } from './commands'
import { getFileName } from './utils/getFileName'
import { mergeConfig } from './utils/mergeConfig'

function main(args: string[]) {
  let result = null
  if (args && args.length > 0) {
    if (COMMANDS[args[0]]) {
      if (args[1]) {
        const fileName = getFileName(args, false)
        const config = mergeConfig(fileName)
        result = COMMANDS[args[0]](args, config)
      } else {
        result = COMMANDS[args[0]]()
      }
    }
  } else {
    result = COMMANDS['help'](args)
  }

  console.log(result)
}

main(process.argv.slice(2))
