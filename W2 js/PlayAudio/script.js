//define a collection of sounds
const sounds = {
  gamelan: "https://cdn.freesound.org/previews/411/411090_5121236-lq.mp3",
  kick: "https://cdn.freesound.org/previews/91/91651_1281492-lq.mp3",
  water: "https://cdn.freesound.org/previews/198/198318_1346068-lq.mp3",
  screaming: "https://cdn.freesound.org/previews/220/220285_4102374-lq.mp3",
};

//define a js player
const player = new Audio();

//function to render the buttons
const renderButtons = () => {
  for (const sound in sounds) {
    //create buttons
    const button = document.createElement("button");
    button.innerText = sound;
    //add eventlisten to play sound on click
    button.addEventListener("click", function () {
      const soundName = this.innerText; //this - refer to button clicked
      const soundURL = sounds[soundName];
      player.src = soundURL;

      //play sound
      player.play();
    });

    //attach the button the page
    document.getElementById("soundboard").appendChild(button);
  }
};

renderButtons();

//generate a button for each sound
//   //play back rate播放速度
//   play.playbackRate = 0.4;
//   //adjust sound volumn
//   player.volume = player.volume * 0.5;
