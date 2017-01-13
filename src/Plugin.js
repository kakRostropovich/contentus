'use strict';

import Element from './Element';

class Plugin {

  /**
   * Create plugin with params
   *
   * @constructor
   * @param {object} options
   * @param {string} options.container
   * @param {string} options.fastClass
   * @param {array} options.contents
   */
  constructor(options) {
    this.container = document.querySelector('' + options.container);
    this.fastSelector = options.fastClass ?
                     '.' + options.targetSelector : '.fp';
    this.contents = options.contents && options.contents.push !== undefined ?
                    options.contents : null;
    this.elements = [];

    this.addHandlers();

    let defaultElement = document.querySelector(this.fastSelector);

    if(defaultElement) {
      this.createElement(this.fastSelector);
    }
  }

  /**
   * @param {string} selector
   */
  createElement(selector) {
    const element = new Element(selector, this.contents);

    this.elements.push(element);
    element.elementId = this.elements.indexOf(element);

    this.assignCurrentElement(element);
  }

  /**
   * @param {object} elem - element, created by createElement()
   */
  assignCurrentElement(elem) {

    this.elements.forEach(item => {
      item.removeCurrentStatus();
    })

    this.currentElement = elem;
    elem.assignCurrentStatus();
  }


  // Add handlers
  addHandlers() {


    document.body.addEventListener('mousemove', event => {

      if (event.altKey) {
        [].map.call(document.querySelectorAll('.fp-hover'), item => {
          item.classList.remove('fp-hover');
        });
        event.target.classList.add('fp-hover');

        event.stopPropagation();
      } else {
        [].map.call(document.querySelectorAll('.fp-hover'), item => {
          item.classList.remove('fp-hover');
        });
      }

    });


    document.body.addEventListener('click', event => {

      if (event.altKey) {

        const prefix = 'fp-uniq';
        let uniqClass = prefix + Math.random().toString().slice(2);
        let classWithPrefix = '';
        let target = event.target;

        if (~target.className.indexOf(prefix)) {

          [].map.call(target.classList, item => {
            if (item.includes(prefix)) classWithPrefix = item;
          });


          let filteredElements = this.elements.filter(item => {
            return item.DOMElement.className.includes(classWithPrefix);
          });

          this.assignCurrentElement(filteredElements[0]);

          return false;
        }

        target.classList.add(uniqClass);

        this.createElement('.' + uniqClass);

        return false;
      }

      return true;
    });


    document.body.addEventListener('keyup', event => {

      event.preventDefault();
      const code = event.keyCode;

      switch(code) {

        // pressed Left
        case 37:
          this.currentElement.applyPrevContent();
          break;

        // pressed Right
        case 39:
          this.currentElement.applyNextContent();
          break;

        // pressed Esc
        case 27:
          this.currentElement.applyDefaultContent();
          break;

        default:

          // pressed 1..4
          if( ~[49, 50, 51, 52].indexOf(code)) {
            this.currentElement.applyContentByIndex( (code + 1) - 50 ) ;
            break;
          }

        return;
      }
    })
  }

}

export default Plugin;