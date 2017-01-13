/**
 * Contentus
 *
 * @author Rostislav Nazmeev <r.m.nazmeev@gmail.com>
 * @description Simple JS-plugin (without dependencies) to help fast testing
 * elements during the development of web interfaces.
 *
 */

import Plugin from './src/Plugin';

/**
 * Export the main method for plugin starting
 *
 * @param {object} options
 * @param {string} options.container
 * @param {string} options.fastClass
 * @param {array} options.contents
 */
export function create(options) {
  return new Plugin(options);
}
