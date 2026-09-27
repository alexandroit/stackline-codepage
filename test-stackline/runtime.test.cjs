const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const cp = require('../');
test('CommonJS exports the numeric converter table and utilities directly', () => {
  assert.equal(cp.default, undefined);
  assert.equal(cp.cptable, undefined);
  assert.equal(cp[1252].dec[0x80], '€');
  assert.equal(cp.utils.decode(1252, cp.utils.encode(1252, 'Café €')), 'Café €');
});
test('multibyte and Unicode roundtrips preserve exact buffers', () => {
  for(const [page, text] of [[949,'한글'],[936,'汇总'],[65001,'🍣 café'],[1200,'AΩ']]) {
    assert.equal(cp.utils.decode(page, cp.utils.encode(page, text)), text);
  }
});
test('cached UTF-8 returns owned bytes that survive later conversions', () => {
  for (const library of [cp, require('../dist/sbcs.full.js'), require('../dist/cpexcel.full.js')]) {
    const bytes = library.utils.encode(65001, '🍣 café');
    const expected = Buffer.from(bytes);
    library.utils.encode(65001, 'replacement');
    assert.deepEqual(bytes, expected);
    assert.equal(library.utils.decode(65001, bytes), '🍣 café');
    assert.deepEqual(bytes, expected);
  }
});
test('every released codepage decode character still has its encoding mapping', () => {
  for(const page of Object.keys(cp).filter(key => /^\d+$/.test(key))) {
    const table = cp[page];
    for(const key of Object.keys(table.dec)) {
      const character = table.dec[key];
      if(character && character.charCodeAt(0) !== 0xfffd) assert.equal(typeof table.enc[character], 'number', `${page}:${key}`);
    }
  }
});
test('browser full bundles preserve global exports without Node globals', () => {
  for(const file of ['dist/sbcs.full.js','dist/cpexcel.full.js']) {
    const context = vm.createContext({});
    vm.runInContext(fs.readFileSync(file,'utf8'),context);
    assert.equal(context.cptable.utils.decode(1252,[0x80]),'€');
  }
});
