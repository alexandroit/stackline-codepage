const { describe, it } = require('node:test');
global.describe = describe;
global.it = (name, fn) => fn ? it(name, fn) : it.skip(name, () => {});
global.it.skip = (name, fn) => it.skip(name, fn || (() => {}));
require('../test.upstream.js');
