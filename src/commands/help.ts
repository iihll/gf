import { EOL } from 'os'

export default function help() {
  return [
		'GF (Generate vue file) usage',
		'',
		'gf help                       Get detailed help for a command',
		'gf gen <file_name>            Generate your vue file for using GF',
		'gf version                    Display GF version',
		'',
	].join(EOL);
}