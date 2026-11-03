const assert = require('assert');
const { status } = require('./index');
const s = status();
assert.strictEqual(s.ok, true);
assert.strictEqual(s.uptime.length, 6);
console.log('ok');
