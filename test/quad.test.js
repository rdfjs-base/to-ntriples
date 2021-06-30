const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const quad = require('../lib/quad.js')

describe('quad', () => {
  it('should be a function', () => {
    strictEqual(typeof quad, 'function')
  })

  it('should convert a Quad to a N-Triples string', () => {
    const q = rdf.quad(
      rdf.blankNode(),
      rdf.namedNode('http://example.org/predicate'),
      rdf.literal('object'),
      rdf.namedNode('http://example.org/graph')
    )

    const expected = `_:${q.subject.value} <${q.predicate.value}> "${q.object.value}" <${q.graph.value}> .`

    strictEqual(quad(q), expected)
  })

  it('should convert a Quad with Default Graph to a N-Triples string', () => {
    const q = rdf.quad(
      rdf.blankNode(),
      rdf.namedNode('http://example.org/predicate'),
      rdf.literal('object')
    )

    const expected = `_:${q.subject.value} <${q.predicate.value}> "${q.object.value}" .`

    strictEqual(quad(q), expected)
  })
})
