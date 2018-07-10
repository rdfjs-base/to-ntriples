/* global describe, it */

const assert = require('assert')
const quadToNTriples = require('../lib/quadToNTriples')
const rdf = require('@rdfjs/data-model')

describe('quadToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof quadToNTriples, 'function')
  })

  it('should convert a Quad to a N-Triples string', () => {
    const quad = rdf.quad(
      rdf.blankNode(),
      rdf.namedNode('http://example.org/predicate'),
      rdf.literal('object'),
      rdf.namedNode('http://example.org/graph')
    )

    const expected = `_:${quad.subject.value} <${quad.predicate.value}> "${quad.object.value}" <${quad.graph.value}> .`

    assert.equal(quadToNTriples(quad), expected)
  })

  it('should convert a Quad with Default Graph to a N-Triples string', () => {
    const quad = rdf.quad(
      rdf.blankNode(),
      rdf.namedNode('http://example.org/predicate'),
      rdf.literal('object')
    )

    const expected = `_:${quad.subject.value} <${quad.predicate.value}> "${quad.object.value}" .`

    assert.equal(quadToNTriples(quad), expected)
  })
})
