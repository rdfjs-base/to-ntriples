const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const literal = require('../lib/literal.js')

describe('literal', () => {
  it('should be a function', () => {
    strictEqual(typeof literal, 'function')
  })

  it('should convert a Literal to a N-Triples string', () => {
    const l = rdf.literal('test')

    strictEqual(literal(l), `"${l.value}"`)
  })
})
