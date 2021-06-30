const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const namedNode = require('../lib/namedNode.js')

describe('namedNode', () => {
  it('should be a function', () => {
    strictEqual(typeof namedNode, 'function')
  })

  it('should convert a Named Node to a N-Triples string', () => {
    const node = rdf.namedNode('http://example.org/namedNode')

    strictEqual(namedNode(node), `<${node.value}>`)
  })
})
