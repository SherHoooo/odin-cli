var chalk = require('chalk')

/**
 * Evaluate an expression in meta.json in the context of
 * prompt answers data.
 */

module.exports = function evaluate (exp, data) {
  /* eslint-disable no-new-func */
  // var fn = new Function('data', 'with (data) { return ' + exp + '}')
  var fn = function (data) {
    if (exp.search(':') > -1) {
      var conditionArr = exp.split(':')
      return data[conditionArr[0].trim()] === conditionArr[1].trim()
    } else {
      return data[exp]
    }
  }
  console.log(exp, data)
  try {
    return fn(data)
  } catch (e) {
    console.error(chalk.red('Error when evaluating filter condition: ' + exp))
  }
}
