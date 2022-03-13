import ElementRenderer from "./ElementRenderer.js";
import ScrollManager from "./ScrollManager.js";
import Virtualizer from "./Virtualizer.js";

const URL = "https://jsonplaceholder.typicode.com/photos";

const startVirtualization = async () => {
  let dataArray;
  try {
    const data = await fetch(URL);
    dataArray = await data.json();
  } catch (err) {
    console.log(err);
  }

  // create element renderer instance - handles rendering of screen elements
  const elementRenderer = new ElementRenderer(dataArray);

  // create virtualizer instance - handles logic of virtualization
  const virtualizer = new Virtualizer(elementRenderer);

  // create scroll manager instance - handles scroll events
  const scrollManager = new ScrollManager(virtualizer);
  scrollManager.startListeningToScrolling();
};

startVirtualization();
