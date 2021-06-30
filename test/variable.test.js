const { strictEqual } = require('assert')
const rdf = require('@rdfjs/data-model')
const { describe, it } = require('mocha')
const variable = require('../lib/variable.js')

describe('variable', () => {
  it('should be a function', () => {
    strictEqual(typeof variable, 'function')
  })

  it('should convert a Variable to a N-Triples string', () => {
    const v = rdf.variable('test')

    strictEqual(variable(v), `?${v.value}`)
  })
})
