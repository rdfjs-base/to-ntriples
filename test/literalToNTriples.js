/* global describe, it */

const assert = require('assert')
const literalToNTriples = require('../lib/literalToNTriples')
const rdf = require('@rdfjs/data-model')

describe('literalToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof literalToNTriples, 'function')
  })

  it('should convert a Literal to a N-Triples string', () => {
    const literal = rdf.literal('test')

    assert.equal(literalToNTriples(literal), `"${literal.value}"`)
  })
})
