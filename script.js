// Elements
const modeBtn = document.querySelector("#mode");
const header = document.querySelector(".header");
const intro = document.querySelector("#intro");
const textarea = document.querySelector(".textarea");
const counters = document.querySelectorAll(".counter");
const modeIcon = document.querySelector("#mode i");
const charCount = document.querySelector(".text-counter");
const wordCount = document.querySelector(".word-counter");
const sentenceCount = document.querySelector(".sentence-counter");

// Different modes
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("active");
  header.classList.toggle("active");
  modeBtn.classList.toggle("active");
  modeIcon.classList.toggle("fa-moon");
  intro.classList.toggle("active");
  textarea.classList.toggle("active");

  counters.forEach((c) => c.classList.toggle("active"));
});

// Counters
textarea.addEventListener("input", () => {
  //character
  let text = textarea.value.trim(); // trim the space that is present in the start and end

  charCount.textContent = text.length;

  //words
  let words = text.split(/\s+/).filter(Boolean); // split text by spaces, filter out empty ones
  wordCount.textContent = words.length;

  //sentences
  let sentences = text
    .split(/(?<!\.)[.!?](?!\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  sentenceCount.textContent = sentences.length;
});
