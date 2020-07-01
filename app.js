// approach 1: traversing the dom

// const questionBtns = document.querySelectorAll(".question-btn");
//
// questionBtns.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     // need to access the parent element of the clicked button's (currentTarget) parent element which is question to show this question's text
//     let question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });


// approach 2: using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  // selecting button for each question
  let button = question.querySelector(".question-btn");
  button.addEventListener("click", () => {
    // check if the clicked button is within the same selected question (item), if not remove show-text class from the selected question...
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
