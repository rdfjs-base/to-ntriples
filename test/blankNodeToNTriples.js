/* global describe, it */

const assert = require('assert')
const blankNodeToNTriples = require('../lib/blankNodeToNTriples')
const rdf = require('@rdfjs/data-model')

describe('blankNodeToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof blankNodeToNTriples, 'function')
  })

  it('should convert a Blank Node to a N-Triples string', () => {
    const blankNode = rdf.blankNode()

    assert.equal(blankNodeToNTriples(blankNode), `_:${blankNode.value}`)
  })
})
