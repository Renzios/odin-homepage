const span = document.querySelector(".typewriter");
const words = ["Lorenzo.", "a developer.", "a student."];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typewriter = () => {
    const word = words[wordIndex];
    const char = word.substring(0, charIndex);
    span.textContent = char;

    if (!isDeleting && charIndex < word.length) {
        charIndex++;
        setTimeout(typewriter, 100);
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typewriter, 100)
    }
    else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typewriter, 1000);
    }
}

typewriter();