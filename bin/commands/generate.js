"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const DEFAULT_TEL = `<template>
  
</template>

<script>
export default {
  
}
</script>
`;
function generate(args) {
    const fileName = args[1];
    const cwd = process.cwd();
    if (fileName) {
        const finalPath = cwd + '/' + fileName + '.vue';
        const template = DEFAULT_TEL;
        (0, fs_1.writeFileSync)(finalPath, template);
        (0, child_process_1.execSync)('code ' + finalPath);
        return 'File created successfully';
    }
    return 'Generate your vue file for using GF';
}
exports.default = generate;
//# sourceMappingURL=generate.js.map