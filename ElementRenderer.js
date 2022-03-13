class ElementRenderer {
  // creates template literals
  createListItemHTML(id, title, url) {
    return `<li id="${id}" class="list-item">
        <img src="${url}" class="image" alt="a placeholder picture">
        <p class="text">${title}</p>
        </li>`;
  }

  // adds element to front of list
  addFirstElement(firstIndex) {
    const listItemHTML = this.createListItemHTML(
      this.dataArray[firstIndex].id,
      this.dataArray[firstIndex].title,
      this.dataArray[firstIndex].url
    );

    document.getElementById("list").innerHTML =
      listItemHTML + document.getElementById("list").innerHTML;
  }

  // adds element at end of list
  addLastElement(lastIndex) {
    const listItemHTML = this.createListItemHTML(
      this.dataArray[lastIndex].id,
      this.dataArray[lastIndex].title,
      this.dataArray[lastIndex].url
    );

    document.getElementById("list").innerHTML =
      document.getElementById("list").innerHTML + listItemHTML;
  }

  // removes first element
  removeFirstElement() {
    document.getElementById("list").firstElementChild.remove();
  }

  // removes last element
  removeLastElement() {
    document.getElementById("list").lastElementChild.remove();
  }

  constructor(dataArray) {
    this.dataArray = dataArray;
  }
}

export default ElementRenderer;
