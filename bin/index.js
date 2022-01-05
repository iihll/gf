#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = __importDefault(require("./commands/generate"));
const help_1 = __importDefault(require("./commands/help"));
const version_1 = __importDefault(require("./commands/version"));
const COMMANDS = {
    'version': version_1.default,
    '-v': version_1.default,
    'g': generate_1.default,
    'gen': generate_1.default,
    'generate': generate_1.default,
    '-?': help_1.default,
    'help': help_1.default,
    '-h': help_1.default,
    '-help': help_1.default,
    '--help': help_1.default,
};
function main(args) {
    let result = null;
    if (args.length) {
        result = COMMANDS[args[0]](args);
    }
    else {
        result = COMMANDS['help']();
    }
    console.log(result);
}
main(process.argv.slice(2));
//# sourceMappingURL=index.js.map