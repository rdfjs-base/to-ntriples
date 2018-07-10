/* global describe, it */

const assert = require('assert')
const defaultGraphToNTriples = require('../lib/defaultGraphToNTriples')
const rdf = require('@rdfjs/data-model')

describe('defaultGraphToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof defaultGraphToNTriples, 'function')
  })

  it('should convert a Default Graph to a N-Triples string', () => {
    assert.equal(defaultGraphToNTriples(rdf.defaultGraph()), '')
  })
})
