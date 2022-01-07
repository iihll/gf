#! /usr/bin/env node
'use strict';

var fs = require('fs');
var child_process = require('child_process');
var path = require('path');
var os = require('os');
var http = require('http');
var process$1 = require('process');

function generate(args, config) {
    const { template, open, suffix } = config;
    const filePath = args[1];
    let dict = filePath.split(/\\|\//);
    const fileName = path.sep + dict.pop();
    const cwd = process.cwd();
    dict = path.resolve(cwd, dict.join(path.sep));
    if (!fs.existsSync(dict)) {
        fs.mkdirSync(dict, { recursive: true });
    }
    const finalPath = dict + fileName + suffix;
    if (finalPath) {
        fs.writeFileSync(finalPath, template);
        if (open) {
            child_process.execSync('code -g ' + finalPath + ':2:3');
        }
        return 'File created successfully';
    }
    return 'Generate your vue file for using GF';
}

const generateInfo = `Generate your vue file using GF

For example:
  gf g test
  gf gen test
  gf generate test
    `;
const HELP_MAP = {
    g: generateInfo,
    gen: generateInfo,
    generate: generateInfo
};
function help(args) {
    if (args && args.length) {
        return HELP_MAP[args[0]];
    }
    return [
        'GF (Generate vue file) usage',
        '',
        'gf help                       get detailed help for a command',
        'gf gen <file_name>            generate your vue file for using GF',
        'gf ui                         start and open the gf ui',
        'gf version                    display GF version',
        '',
    ].join(os.EOL);
}

function ui() {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('okay');
    });
    server.listen(8000, '0.0.0.0', () => { });
    return 'Ready on http://localhost:8000';
}

function version() {
    const packageJson = fs.readFileSync(path.resolve(__dirname, '../package.json'));
    return JSON.parse(packageJson.toString()).version;
}

const COMMANDS = {
    version,
    '-v': version,
    g: generate,
    gen: generate,
    generate,
    '-?': help,
    help: help,
    '-h': help,
    '-help': help,
    '--help': help,
    ui
};

const VUE2_TEMPLATE = `<template>
  
</template>

<script>
export default {
  
}
</script>
`;
const defaultConfig = {
    version: '2',
    open: true,
    suffix: '.vue',
    template: VUE2_TEMPLATE
};

function getTemplate() {
    const template = fs.readFileSync(path.join(process$1.cwd(), './tel.vue'));
    return template;
}

function mergeConfig() {
    const template = getTemplate();
    return {
        ...defaultConfig,
        template: template.toString()
    };
}

function main(args) {
    let result = null;
    const config = mergeConfig();
    if (args && args.length) {
        if (COMMANDS[args[0]]) {
            result = COMMANDS[args[0]](args, config);
        }
    }
    else {
        result = COMMANDS['help'](args);
    }
    console.log(result);
}
main(process.argv.slice(2));
//# sourceMappingURL=index.js.map
