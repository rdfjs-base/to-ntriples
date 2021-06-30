const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const blankNode = require('../lib/blankNode.js')

describe('blankNode', () => {
  it('should be a function', () => {
    strictEqual(typeof blankNode, 'function')
  })

  it('should convert a Blank Node to a N-Triples string', () => {
    const node = rdf.blankNode()

    strictEqual(blankNode(node), `_:${node.value}`)
  })
})
