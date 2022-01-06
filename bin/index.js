#! /usr/bin/env node
'use strict';

var fs = require('fs');
var child_process = require('child_process');
var path = require('path');
var os = require('os');

const DEFAULT_TEMPLATE = `<template>
  
</template>

<script>
export default {
  
}
</script>
`;
function generate(args) {
    const filePath = args[1];
    let dict = filePath.split(/\\|\//);
    const fileName = path.sep + dict.pop();
    const suffix = '.vue';
    const cwd = process.cwd();
    dict = path.resolve(cwd, dict.join(path.sep));
    if (!fs.existsSync(dict)) {
        fs.mkdirSync(dict, { recursive: true });
    }
    const finalPath = dict + fileName + suffix;
    if (finalPath) {
        const template = DEFAULT_TEMPLATE;
        fs.writeFileSync(finalPath, template);
        child_process.execSync('code -g ' + finalPath + ':2:3');
        return 'File created successfully';
    }
    return 'Generate your vue file for using GF';
}

function help() {
    return [
        'GF (Generate vue file) usage',
        '',
        'gf help                       Get detailed help for a command',
        'gf gen <file_name>            Generate your vue file for using GF',
        'gf version                    Display GF version',
        '',
    ].join(os.EOL);
}

function version() {
    const packageJson = fs.readFileSync(path.resolve(__dirname, '../package.json'));
    return JSON.parse(packageJson.toString()).version;
}

const COMMANDS = {
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
};

function main(args) {
    let result = null;
    if (args.length) {
        if (COMMANDS[args[0]]) {
            result = COMMANDS[args[0]](args);
        }
        else {
            result = COMMANDS['help']();
        }
    }
    else {
        result = COMMANDS['help']();
    }
    console.log(result);
}
main(process.argv.slice(2));
//# sourceMappingURL=index.js.map
