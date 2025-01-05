const firstLetter = document.getElementById("first-letter");
const secondLetter = document.getElementById("second-letter");
const birthdaySong = document.getElementById("birthday-song");

document.body.addEventListener("click", () => {
    if (!firstLetter.classList.contains("hidden")) {
        // First letter animation
        firstLetter.style.transform = "translate(-50%, -150%) rotate(360deg)";
        firstLetter.style.opacity = "0";
        
        setTimeout(() => {
            firstLetter.classList.add("hidden");
            secondLetter.classList.remove("hidden");
            birthdaySong.play();
        }, 1000);
    }
});