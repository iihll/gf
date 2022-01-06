"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const path_1 = require("path");
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
    const fileName = path_1.sep + dict.pop();
    const suffix = ".vue";
    const cwd = process.cwd();
    dict = (0, path_1.resolve)(cwd, dict.join(path_1.sep));
    if (!(0, fs_1.existsSync)(dict)) {
        (0, fs_1.mkdirSync)(dict, { recursive: true });
    }
    const finalPath = dict + fileName + suffix;
    if (finalPath) {
        const template = DEFAULT_TEMPLATE;
        (0, fs_1.writeFileSync)(finalPath, template);
        (0, child_process_1.execSync)("code -g " + finalPath + ':2:3');
        return "File created successfully";
    }
    return "Generate your vue file for using GF";
}
exports.default = generate;
//# sourceMappingURL=generate.js.map