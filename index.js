function playAudio(e) {
    const currentAudio =
        document.querySelector(`audio.key-audio[data-key="${e.keyCode}"]`) ||
        document.querySelector(
            `audio.key-audio[data-key="${e.target.getAttribute("data-key")}"]`
        );

    // if the audio doesn't exist
    if (!currentAudio) {
        return;
    }

    // reset the audio and play
    currentAudio.currentTime = 0;
    currentAudio.play();

    // add style to the currently pressed key
    const currentKey =
        document.querySelector(`.key[data-key="${e.keyCode}"]`) ||
        document.querySelector(
            `.key[data-key="${e.target.getAttribute("data-key")}"]`
        );
    currentKey.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", playAudio);
});

window.addEventListener("keydown", playAudio);
