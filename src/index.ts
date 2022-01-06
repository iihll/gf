import { COMMANDS } from './commands'

function main(args: string[]) {
  let result = null
  if (args.length) {
    if (COMMANDS[args[0]]) {
      result = COMMANDS[args[0]](args)
    } else {
      result = COMMANDS['help']()
    }
  } else {
    result = COMMANDS['help']()
  }

  console.log(result)
}

main(process.argv.slice(2))
