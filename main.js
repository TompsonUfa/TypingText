const dymanicText = document.querySelector('.title span');
const words = ["Love", "Force", "Meaning in life"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dymanicText.textContent = currentChar;
    dymanicText.classList.add('stop-blink');
    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200)
    } else if (isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100)
    } else {
        isDeleting = !isDeleting;
        dymanicText.classList.remove('stop-blink');
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();