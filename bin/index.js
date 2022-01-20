#! /usr/bin/env node
"use strict";var fs=require("fs"),child_process=require("child_process"),path=require("path"),os=require("os"),http=require("http"),process$1=require("process");function generate(e,n){var{template:t,open:o,suffix:r}=n;const i=e[1];let s=i.split(/\\|\//);n=path.sep+s.pop(),e=process.cwd();s=path.resolve(e,s.join(path.sep)),fs.existsSync(s)||fs.mkdirSync(s,{recursive:!0});r=s+n+r;return r?(fs.writeFileSync(r,t),o&&child_process.execSync("code -g "+r+":2:3"),"File created successfully"):"Generate your vue file for using GF"}const generateInfo=`Generate your vue file using GF

For example:
  gf g test
  gf gen test
  gf generate test
    `,configInfo=`Config GF

For example:
  gf config open true
  gf config version 3
  gf config useTel true
    `,HELP_MAP={g:generateInfo,gen:generateInfo,generate:generateInfo,config:configInfo};function help(e){return e&&e.length&&HELP_MAP.hasOwnProperty(e[0])?HELP_MAP[e[0]]:["GF (Generate vue file) usage","","gf config <config_item> <value>    GF global config","gf help                            get detailed help for a command","gf gen <file_name>                 generate your vue file for using GF","gf ui                              start and open the GF ui","gf version                         display GF version",""].join(os.EOL)}function ui(){const e=http.createServer((e,n)=>{n.writeHead(200,{"Content-Type":"text/plain"}),n.end("okay")});return e.listen(8e3,"0.0.0.0",()=>{}),"Ready on http://localhost:8000"}function version(){const e=fs.readFileSync(path.resolve(__dirname,"../package.json"));return JSON.parse(e.toString()).version}function exist(){var e=os.homedir+"/gfConfig.json";return fs.existsSync(e)}const defaultConfig={version:"2",open:!0,suffix:".vue",template:"VUE3_TEMPLATE",useTel:!0};function getConfigJson(){if(exist()){var e=fs.readFileSync(os.homedir+"/gfConfig.json","utf8");return JSON.parse(e)}fs.writeFileSync(os.homedir+"/gfConfig.json",JSON.stringify(defaultConfig),"utf8");e=fs.readFileSync(os.homedir+"/gfConfig.json","utf8");return JSON.parse(e)}const CONFIG_MAP={open:e=>"true"===e,get:()=>{console.log(""),console.log(getConfigJson()),console.log("")}};function config(e,n){const t=getConfigJson();var o=e[1],e=e[2];return t[o]=CONFIG_MAP[o](e),e?(fs.writeFileSync(os.homedir+"/gfConfig.json",JSON.stringify(t),"utf8"),"Complete configuration"):"Please input config_item value"}const COMMANDS={version:version,"-v":version,g:generate,gen:generate,generate:generate,"-?":help,help:help,"-h":help,"-help":help,"--help":help,ui:ui,config:config},TEL_MAP={VUE2_TEMPLATE:`<template>

</template>

<script>
export default {
  
}
</script>
`,VUE3_TEMPLATE:`<template>
  
</template>

<script setup lang="ts">

</script>
`};function getTemplate(e="VUE2_TEMPLATE"){var n=getConfigJson();let t=TEL_MAP[e];e=path.join(process$1.cwd(),"./tel.vue");return fs.existsSync(e)&&n.useTel&&(t=fs.readFileSync(e).toString()),t}function mergeConfig(){var e=getConfigJson(),n=getTemplate(e.template);return{...e,template:n}}function main(e){let n=null;var t=mergeConfig();e&&1<e.length?COMMANDS[e[0]]&&(n=COMMANDS[e[0]](e,t)):n=COMMANDS.help(e),console.log(n)}main(process.argv.slice(2));
//# sourceMappingURL=index.js.map
