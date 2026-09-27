const {execFileSync}=require('node:child_process');
for(const file of ["cputils.js", "cptable.js", "dist/sbcs.full.js", "dist/cpexcel.full.js"]) execFileSync(process.execPath,['--check',file],{stdio:'inherit'});
