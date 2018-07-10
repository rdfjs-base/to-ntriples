function namedNodeToNTriples (namedNode) {
  return '<' + namedNode.value + '>' // TODO: escape special chars
}

module.exports = namedNodeToNTriples
