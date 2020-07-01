// approach 1: traversing the dom

const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // need to access the parent element of the clicked button's (currentTarget) parent element which is question to show this question's text
    let question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});


// approach 2: using selectors inside the element
