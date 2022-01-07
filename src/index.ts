import { COMMANDS } from './commands'
import { mergeConfig } from './utils/mergeConfig'

function main(args: string[]) {
  let result = null
  const config = mergeConfig()
  if (args && args.length && args.length > 1) {
    if (COMMANDS[args[0]]) {
      result = COMMANDS[args[0]](args, config)
    }
  } else {
    result = COMMANDS['help'](args)
  }

  console.log(result)
}

main(process.argv.slice(2))
