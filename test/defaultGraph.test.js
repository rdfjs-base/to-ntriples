const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const defaultGraph = require('../lib/defaultGraph.js')

describe('defaultGraph', () => {
  it('should be a function', () => {
    strictEqual(typeof defaultGraph, 'function')
  })

  it('should convert a Default Graph to a N-Triples string', () => {
    strictEqual(defaultGraph(rdf.defaultGraph()), '')
  })
})
