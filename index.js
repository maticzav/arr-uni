const unique = require('arr-unique')

module.exports = (...args) => {
  const arrOfArrs = args.length === 1 && args[0].length > 1
  const arrs = arrOfArrs ? args[0] : args
  if (arrs.some(a => !Array.isArray(a))) {
    throw new Error(`Some of provided values weren't arrays.`)
  }

  return unique([].concat(...arrs))
}
