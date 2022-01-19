import { EOL } from 'os'

const generateInfo = `Generate your vue file using GF

For example:
  gf g test
  gf gen test
  gf generate test
    `
const configInfo = `Config GF

For example:
  gf config open true
  gf config version 3
  gf config useTel true
    `

const HELP_MAP = {
  g: generateInfo,
  gen: generateInfo,
  generate: generateInfo,
  config: configInfo
}

export default function help(args: string[]): string {
  if(args && args.length && HELP_MAP.hasOwnProperty(args[0])) {
    return HELP_MAP[args[0]]
  }

  return [
    'GF (Generate vue file) usage',
    '',
    'gf config <config_item> <value>    GF global config',
    'gf help                            get detailed help for a command',
    'gf gen <file_name>                 generate your vue file for using GF',
    'gf ui                              start and open the GF ui',
    'gf version                         display GF version',
    '',
  ].join(EOL)
}
