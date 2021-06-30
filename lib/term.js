const blankNode = require('./blankNode.js')
const defaultGraph = require('./defaultGraph.js')
const literal = require('./literal.js')
const namedNode = require('./namedNode.js')
const variable = require('./variable.js')

function term (term) {
  switch (term.termType) {
    case 'BlankNode':
      return blankNode(term)
    case 'DefaultGraph':
      return defaultGraph(term)
    case 'Literal':
      return literal(term)
    case 'NamedNode':
      return namedNode(term)
    case 'Variable':
      return variable(term)
    default:
      return undefined
  }
}

module.exports = term
