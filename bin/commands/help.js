"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
function help() {
    return [
        'GF (Generate vue file) usage',
        '',
        'gf help                       Get detailed help for a command',
        'gf gen <file_name>            Generate your vue file for using GF',
        'gf version                    Display GF version',
        '',
    ].join(os_1.EOL);
}
exports.default = help;
//# sourceMappingURL=help.js.map