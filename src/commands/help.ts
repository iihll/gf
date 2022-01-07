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
    'gf help                       get detailed help for a command',
    'gf gen <file_name>            generate your vue file for using GF',
    'gf ui                         start and open the gf ui',
    'gf version                    display GF version',
    '',
  ].join(EOL)
}
