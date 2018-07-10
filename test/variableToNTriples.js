/* global describe, it */

const assert = require('assert')
const variableToNTriples = require('../lib/variableToNTriples')
const rdf = require('@rdfjs/data-model')

describe('variableToNTriples', () => {
  it('should be a function', () => {
    assert.equal(typeof variableToNTriples, 'function')
  })

  it('should convert a Variable to a N-Triples string', () => {
    const variable = rdf.variable()

    assert.equal(variableToNTriples(variable), `?${variable.value}`)
  })
})
