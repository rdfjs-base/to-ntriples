/* global describe, it */

const assert = require('assert')
const namedNodeToNTriples = require('../lib/namedNodeToNTriples')
const rdf = require('@rdfjs/data-model')

describe('namedNodeToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof namedNodeToNTriples, 'function')
  })

  it('should convert a Named Node to a N-Triples string', () => {
    const namedNode = rdf.namedNode('http://example.org/namedNode')

    assert.equal(namedNodeToNTriples(namedNode), `<${namedNode.value}>`)
  })
})
