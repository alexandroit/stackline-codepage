const {execFileSync} = require('node:child_process');
const compiler = require('node:path').join(require('node:path').dirname(require.resolve('typescript/package.json')), 'bin/tsc');
const common = ['--ignoreConfig','--strict','--noEmit','--target','es2020','--module','nodenext','--moduleResolution','nodenext'];
execFileSync(process.execPath,[compiler,...common,'test-stackline/commonjs.ts'],{stdio:'inherit'});
execFileSync(process.execPath,[compiler,...common,'--esModuleInterop','test-stackline/interop.ts'],{stdio:'inherit'});
