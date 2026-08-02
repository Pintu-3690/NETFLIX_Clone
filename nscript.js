const slider = document.getElementById("slider");

document.querySelector(".right").onclick = () => {
    slider.scrollBy({
        left: 600,
        behavior: "smooth"
    });
};

document.querySelector(".left").onclick = () => {
    slider.scrollBy({
        left: -600,
        behavior: "smooth"
    });
};
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        answer.classList.toggle("active");

        const icon = question.querySelector("span");
        icon.textContent = answer.classList.contains("active") ? "×" : "+";
    });
});