import { EOL } from 'os'

const generateInfo = `Generate your vue file using GF

For example:
  gf g test
  gf gen test
  gf generate test
    `

const HELP_MAP = {
  g: generateInfo,
  gen: generateInfo,
  generate: generateInfo
}

export default function help(args: string[]): string {
  if(args && args.length) {
    return HELP_MAP[args[0]]
  }

  return [
    'GF (Generate vue file) usage',
    '',
    'gf help                       Get detailed help for a command',
    'gf gen <file_name>            Generate your vue file for using GF',
    'gf version                    Display GF version',
    '',
  ].join(EOL)
}
