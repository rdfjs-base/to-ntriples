const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const term = require('../lib/term.js')

describe('term', () => {
  it('should be a function', () => {
    strictEqual(typeof term, 'function')
  })

  it('should convert a Blank Node to a N-Triples string', () => {
    const blankNode = rdf.blankNode()

    strictEqual(term(blankNode), `_:${blankNode.value}`)
  })

  it('should convert a Default Graph to a N-Triples string', () => {
    strictEqual(term(rdf.defaultGraph()), '')
  })

  it('should convert a Literal to a N-Triples string', () => {
    const literal = rdf.literal('test')

    strictEqual(term(literal), `"${literal.value}"`)
  })

  it('should convert a Named Node to a N-Triples string', () => {
    const namedNode = rdf.namedNode()

    strictEqual(term(namedNode), `<${namedNode.value}>`)
  })

  it('should convert a Variable to a N-Triples string', () => {
    const variable = rdf.variable()

    strictEqual(term(variable), `?${variable.value}`)
  })
})
