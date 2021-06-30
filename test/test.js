const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const lib = require('..')
const quad = require('../lib/quad.js')
const term = require('../lib/term.js')

describe('to-ntriples', () => {
  it('should expose quadToNTriples', () => {
    strictEqual(typeof lib.quadToNTriples, 'function')
    strictEqual(quad, lib.quadToNTriples)
  })

  it('should expose termToNTriples', () => {
    strictEqual(typeof lib.termToNTriples, 'function')
    strictEqual(term, lib.termToNTriples)
  })
})
