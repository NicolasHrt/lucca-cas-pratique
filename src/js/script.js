document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const faqCross = this.querySelector(".faq-cross");

      // Basculer entre les classes pour 'answer'
      const isExpanded = answer.classList.toggle(
        "max-h-40",
        !answer.classList.contains("max-h-40"),
      );
      answer.classList.toggle("max-h-0", !isExpanded);

      // Appliquer la rotation pour 'faqCross'
      faqCross.classList.toggle("rotate-90", isExpanded);
      faqCross.classList.toggle("rotate-0", !isExpanded);
    });
  });
});
