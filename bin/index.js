#! /usr/bin/env node
"use strict";var fs=require("fs"),child_process=require("child_process"),path=require("path"),os=require("os"),http=require("http"),process$1=require("process");function generate(e,t){var{template:n,open:r,suffix:s}=t;const o=e[1];let i=o.split(/\\|\//);t=path.sep+i.pop(),e=process.cwd();i=path.resolve(e,i.join(path.sep)),fs.existsSync(i)||fs.mkdirSync(i,{recursive:!0});s=i+t+s;return s?(fs.writeFileSync(s,n),r&&child_process.execSync("code -g "+s+":2:3"),"File created successfully"):"Generate your vue file for using GF"}const generateInfo=`Generate your vue file using GF

For example:
  gf g test
  gf gen test
  gf generate test
    `,HELP_MAP={g:generateInfo,gen:generateInfo,generate:generateInfo};function help(e){return e&&e.length?HELP_MAP[e[0]]:["GF (Generate vue file) usage","","gf help                       get detailed help for a command","gf gen <file_name>            generate your vue file for using GF","gf ui                         start and open the gf ui","gf version                    display GF version",""].join(os.EOL)}function ui(){const e=http.createServer((e,t)=>{t.writeHead(200,{"Content-Type":"text/plain"}),t.end("okay")});return e.listen(8e3,"0.0.0.0",()=>{}),"Ready on http://localhost:8000"}function version(){const e=fs.readFileSync(path.resolve(__dirname,"../package.json"));return JSON.parse(e.toString()).version}const COMMANDS={version:version,"-v":version,g:generate,gen:generate,generate:generate,"-?":help,help:help,"-h":help,"-help":help,"--help":help,ui:ui},VUE2_TEMPLATE=`<template>
  
</template>

<script>
export default {
  
}
</script>
`,defaultConfig={version:"2",open:!0,suffix:".vue",template:VUE2_TEMPLATE};function getTemplate(){return fs.readFileSync(path.join(process$1.cwd(),"./tel.vue"))}function mergeConfig(){const e=getTemplate();return{...defaultConfig,template:e.toString()}}function main(e){let t=null;var n=mergeConfig();e&&e.length?COMMANDS[e[0]]&&(t=COMMANDS[e[0]](e,n)):t=COMMANDS.help(e),console.log(t)}main(process.argv.slice(2));
//# sourceMappingURL=index.js.map
