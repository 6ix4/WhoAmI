import "./App.css";
import React from "react";
import {createAudioElement, toggleAudio} from "./utils/audioUtils.jsx";
import {createAnimationImage, animate} from "./utils/animationUtils.jsx";
import {createPhraseBox, phrase} from "./utils/phraseUtils.jsx";
import club from "./utils/club.easterEgg.jsx";

function App() {
    club(64);

    const imageUrls = [
        'assets/animation/shot_01.svg',
        'assets/animation/shot_02.svg',
        'assets/animation/shot_03.svg',
        'assets/animation/shot_04.svg',
        'assets/animation/shot_05.svg',
        'assets/animation/shot_06.svg',
        'assets/animation/shot_07.svg',
        'assets/animation/shot_08.svg',
        'assets/animation/shot_09.svg',
        'assets/animation/shot_10.svg',
    ];

    const phrasesList = [
        "There’s no place like 127.0.0.1 😁",
        "Programmer:A machine that caffeine & pizza into code.",
        "Computers are fast, programmers keep it slow.",
        "Linux is only free if your time has no value.",
        "God is real... unless declared integer. 👼",
        "I not failed. I’ve just found 10,000 ways that won’t work.",
        "Whitespace is never white.",
    ];
    const start = () => {
        const audio = createAudioElement();
        const animationImage = createAnimationImage()
        const phraseBox = createPhraseBox();

        phrase(phraseBox, phrasesList);
        animate(animationImage, imageUrls);

        const container = document.querySelector(".container");
        container.removeChild(document.querySelector(".begin"));
        document.querySelector("body").classList.add("colored-background");

        animationImage.onclick = () => toggleAudio(audio);
    }
    return (
        <div className="container">
      <span
          className="begin glitch"
          data-text="Begin (🔊)"
          onClick={start}
      >
        Begin (🔊)
      </span>
        </div>
    );
}

export default App;