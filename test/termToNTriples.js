/* global describe, it */

const assert = require('assert')
const termToNTriples = require('../lib/termToNTriples')
const rdf = require('@rdfjs/data-model')

describe('termToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof termToNTriples, 'function')
  })

  it('should convert a Blank Node to a N-Triples string', () => {
    const blankNode = rdf.blankNode()

    assert.equal(termToNTriples(blankNode), `_:${blankNode.value}`)
  })

  it('should convert a Default Graph to a N-Triples string', () => {
    assert.equal(termToNTriples(rdf.defaultGraph()), '')
  })

  it('should convert a Literal to a N-Triples string', () => {
    const literal = rdf.literal('test')

    assert.equal(termToNTriples(literal), `"${literal.value}"`)
  })

  it('should convert a Named Node to a N-Triples string', () => {
    const namedNode = rdf.namedNode()

    assert.equal(termToNTriples(namedNode), `<${namedNode.value}>`)
  })

  it('should convert a Variable to a N-Triples string', () => {
    const variable = rdf.variable()

    assert.equal(termToNTriples(variable), `?${variable.value}`)
  })
})
