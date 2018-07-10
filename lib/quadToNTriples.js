const termToNTriples = require('./termToNTriples')

function quadToNTriples (quad) {
  const subjectString = termToNTriples(quad.subject)
  const predicateString = termToNTriples(quad.predicate)
  const objectString = termToNTriples(quad.object)
  const graphString = termToNTriples(quad.graph)

  return `${subjectString} ${predicateString} ${objectString} ${graphString ? graphString + ' ' : ''}.`
}

module.exports = quadToNTriples
