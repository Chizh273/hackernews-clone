export default str =>
  str.replace(/\b\w/g, l => l.toUpperCase())
