"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
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
    const finalPath = cwd + '/' + fileName + '.vue';
    const template = DEFAULT_TEL;
    (0, fs_1.writeFileSync)(finalPath, template);
    return 'File created successfully';
}
exports.default = generate;
//# sourceMappingURL=generate.js.map