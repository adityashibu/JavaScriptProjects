const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckBox = document.querySelector(".piano-keys input");

let allKeys = [];
audio = new Audio('tunes/a.wav');

const playSound = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector('[data-key="$[key]"');
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener('click', () => playSound(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const pressedKey = (e) => {
    const key = e.key.toLowerCase();
    if (allKeys.includes(key)) playTune(key);
};

const showHideKeys = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckBox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);