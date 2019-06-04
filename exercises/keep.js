'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */


//* Begin of tests
const assert = require('assert')

const keepFirst = str => str.slice(0, 2)
const keepLast = str => str.slice(str.length - 2)
const keepFirstLast = str => keepLast(keepFirst(str))

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst('salut'), 'sa')
assert.strictEqual(keepLast('salut'), 'ut')
assert.strictEqual(keepFirstLast('salut'), 'sa')
// End of tests */
