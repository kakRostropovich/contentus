'use strict';

import './css/element.css';

class Element {

  /**
   * Create element based DOM-element for testing
   *
   * @param {string} selector
   * @param {array} contents - or null if contents were not transferred
   */
  constructor(selector, contents) {

    if (contents !== null) {

      this.contents = contents.map(item => item);

    } else {

      this.contents = [
        `This is a small text in one line`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!`,
        `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!</p>`
      ];

    }

    this.DOMElement = document.querySelector('' + selector);
    this.initialContent = this.DOMElement.innerHTML;
    this.currentIndex = 0;
    this.debugClass = 'fp-current';

    this.contents.unshift(this.initialContent);
  }

  /**
   * @param {object} elem - DOM element
   * @param {string} content
   */
  changeContent(elem, content) {
    elem.innerHTML = '' + content;
  }

  /**
   * @param {object} elem - DOM element
   * @param {string} initialContent - preserve the original value of the element
   */
  resetContent(elem, initialContent) {
    elem.innerHTML = '' + initialContent;
  }

  applyPrevContent() {
    this.currentIndex = this.currentIndex === 0 ?
                        this.contents.length - 1 :
                        this.currentIndex - 1;

    this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
  }

  applyNextContent() {
    this.currentIndex = this.currentIndex === this.contents.length - 1 ?
                        0 : this.currentIndex + 1;

    this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
  }

  /**
   * @param {number} index - starts with 0
   */
  applyContentByIndex(index) {
    this.currentIndex = index;
    this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
  }

  /**
   * @param {number} index - starts with 0
   */
  applyDefaultContent(index) {
    this.currentIndex = 0;
    this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
  }

  assignCurrentStatus() {
    this.DOMElement.classList.add(this.debugClass);
  }

  removeCurrentStatus() {
    this.DOMElement.classList.remove(this.debugClass);
  }

}

export default Element;