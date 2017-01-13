// Simple method for fast show errors
var check = function(condition, testName) {
  var status = condition ? 'DONE' : 'FAILED';
  var color = condition ? 'green' : 'red';

  console.log('%c' + testName + ': ' + status, 'color: ' + color + '; font-weight: bold; font-size: 12px')
}

/**
 *
 * TESTS
 *
 */

// has loaded assembled plugin
check(contentus, 'Plugin has assembled and loaded');