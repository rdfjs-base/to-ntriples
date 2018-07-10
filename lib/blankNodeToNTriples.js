function blankNodeToNTriples (blankNode) {
  return '_:' + blankNode.value // TODO: escape special chars
}

module.exports = blankNodeToNTriples
