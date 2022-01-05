"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function version() {
    const packageJson = (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '../../package.json'));
    return JSON.parse(packageJson.toString()).version;
}
exports.default = version;
//# sourceMappingURL=version.js.map