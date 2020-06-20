let faq_accordion = document.getElementsByClassName('faq-question');
let i;

for (let i = 0; i < faq_accordion.length; i++) {
  faq_accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let faq_answer = this.nextElementSibling;
    if (faq_answer.style.display === 'block') {
      faq_answer.style.display = 'none';
    } else {
      faq_answer.style.display = 'block';
    }
  });
}
