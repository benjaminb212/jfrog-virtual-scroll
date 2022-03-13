const ITEM_HEIGHT = 50;

class ScrollManager {
  startListeningToScrolling() {
    document
      .getElementById("scrollable")
      .addEventListener("scroll", this.handleScroll);
  }

  lastScrollTop = 0;

  handleScroll() {
    const scrollTop = document.getElementById("scrollable").scrollTop;

    // check direction of scroll - up or down
    if (scrollTop >= this.lastScrollTop + ITEM_HEIGHT) {
      // calc number of elements to render
      const numOfElements = Math.floor(
        (scrollTop - this.lastScrollTop) / ITEM_HEIGHT
      );

      // add to last scrollTop current number of elements to be rendered * height of a list item
      this.lastScrollTop += numOfElements * ITEM_HEIGHT;

      this.virtualizer.renderDownwards(numOfElements, this.lastScrollTop);
    } else if (scrollTop <= this.lastScrollTop - ITEM_HEIGHT) {
      // calc number of elements to render
      const numOfElements = Math.ceil(
        (this.lastScrollTop - scrollTop) / ITEM_HEIGHT
      );

      // subtract from last scrollTop current number of elements to be rendered * height of a list item
      this.lastScrollTop -= numOfElements * ITEM_HEIGHT;

      this.virtualizer.renderUpwards(numOfElements, this.lastScrollTop);
    }
  }

  constructor(virtualizer) {
    this.virtualizer = virtualizer;

    // bind handleScroll inorder to not lose context while passing as callback
    this.handleScroll = this.handleScroll.bind(this);
  }
}

export default ScrollManager;
