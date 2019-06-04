'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = str => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you'), 'How Are You')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
// End of tests */
