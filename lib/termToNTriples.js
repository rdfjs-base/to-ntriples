const blankNodeToNTriples = require('./blankNodeToNTriples')
const defaultGraphToNTriples = require('./defaultGraphToNTriples')
const literalToNTriples = require('./literalToNTriples')
const namedNodeToNTriples = require('./namedNodeToNTriples')
const variableToNTriples = require('./variableToNTriples')

function termToNTriples (term) {
  switch (term.termType) {
    case 'BlankNode':
      return blankNodeToNTriples(term)
    case 'DefaultGraph':
      return defaultGraphToNTriples(term)
    case 'Literal':
      return literalToNTriples(term)
    case 'NamedNode':
      return namedNodeToNTriples(term)
    case 'Variable':
      return variableToNTriples(term)
    default:
      return undefined
  }
}

module.exports = termToNTriples
