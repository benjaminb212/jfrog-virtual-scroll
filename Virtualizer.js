const HIGHEST_INDEX = 5000;
const LOWEST_INDEX = 0;
const INITIAL_NUM_OF_ELEMENTS = 11;

class Virtualizer {
  translateY(yPixels) {
    document.getElementById(
      "list"
    ).style.transform = `translateY(${yPixels}px)`;
  }

  firstIndex = 0;

  lastIndex = 0;

  incrementIndexes() {
    this.firstIndex++;
    this.lastIndex++;
  }

  decrementIndexes() {
    this.firstIndex--;
    this.lastIndex--;
  }

  // renders elements on downwards scroll
  renderDownwards(numOfElements, yPixels) {
    for (let i = 0; i < numOfElements; i++) {
      if (this.lastIndex >= HIGHEST_INDEX) return;

      this.translateY(yPixels);

      this.elementRenderer.addLastElement(this.lastIndex);

      this.elementRenderer.removeFirstElement();

      this.incrementIndexes();
    }
  }

  // renders elements on upwards scroll
  renderUpwards(numOfElements, yPixels) {
    for (let i = 0; i < numOfElements; i++) {
      if (this.firstIndex <= LOWEST_INDEX) return;

      this.translateY(yPixels);

      this.elementRenderer.addFirstElement(this.firstIndex - 1);

      this.elementRenderer.removeLastElement();

      this.decrementIndexes();
    }
  }

  // renders first elements on screen
  initialRender() {
    Array(INITIAL_NUM_OF_ELEMENTS)
      .fill(null)
      .forEach(() => {
        this.elementRenderer.addLastElement(this.lastIndex);
        this.lastIndex++;
      });
  }

  constructor(elementRenderer) {
    this.elementRenderer = elementRenderer;
    this.initialRender();
  }
}

export default Virtualizer;
