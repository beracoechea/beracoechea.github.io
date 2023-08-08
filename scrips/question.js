(function () {
  const titleQuestions = [...document.querySelectorAll('.questions__title')];

  titleQuestions.forEach(question => {
      question.addEventListener('click', () => {
          let height = 0;
          let answer = question.nextElementSibling;
          let addPadding = question.parentElement.parentElement;

          addPadding.classList.toggle('questions__padding--add');
          question.children[0].classList.toggle('questions__arrow--rotate');

          if (answer.clientHeight === 0) {
              height = answer.scrollHeight;
              answer.classList.add('questions__show'); // Agregar la clase questions__show
          } else {
              answer.classList.remove('questions__show'); // Quitar la clase questions__show
          }

          answer.style.height = `${height}px`;
      });
  });
})();
