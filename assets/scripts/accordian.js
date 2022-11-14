//pseudocode

/*

1.Grab the accordion buttons from the DOM and store them into a variable

2. go through each accordion button one by one

3. Use the classlist dom method in combination with the toggle method provided by the DOM to add or remove the “is-open” class.

4. get the div that has the content of the accordion button you are currently looking at

5. set the max-height based on whether the current value of the max-height css property is a truthy value or not

6. If the accordion is closed we set the max-height of the currently hidden text inside the accordion from 0 to the scroll height of the content inside the accordion.

*/

const accordionBtns = document.querySelectorAll('.accordion');

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {

    this.classList.toggle('is-open');
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;

    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + 'px';
    }

  };

});