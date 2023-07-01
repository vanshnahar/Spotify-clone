let songIndex = 0;
let Audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let playing = document.getElementById('playing')
let songItem = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname');
let currentSongIndex = 0;

let songItemplay = document.getElementsByClassName('songItemplay');
let backgroundImage = document.getElementById('backgroundImage');
// console.log(play)
let songs = [
    { songName: "Bad boy", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Kesariya", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Let Me Love You ", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Maan Meri Jaan", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Man of the Moon", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Obsessed", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "Shape of you", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "Tu Hai To Mujhe Phir", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" }
]
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
});
// Audioelement.play();
masterplay.addEventListener('click', () => {
    if (Audioelement.paused || Audioelement.currentTime <= 0) {

        document.getElementById(currentSongIndex).classList.remove('fa-circle-play');
        document.getElementById(currentSongIndex).classList.add('fa-circle-pause');

        mastersongname.innerText = songs[songIndex].songName;

        Audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        playing.style.opacity = 1
        backgroundImage.classList.add('play');
        console.log(play)
    }
    else {
        document.getElementById(currentSongIndex).classList.add('fa-circle-play');
        document.getElementById(currentSongIndex).classList.remove('fa-circle-pause');
        Audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        playing.style.opacity = 0
        image.style.opacity = 0
        backgroundImage.classList.remove('play')
        console.log(play)

    }
    // console.log('clicked')
})
Audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((Audioelement.currentTime / Audioelement.duration) * 100);
    myprogressbar.value = progress;

    // if(Audioelement.currentTime === Audioelement.duration)
    // {
    //     songIndex=(songIndex+1)%songs.length
    //     let event = new Event('click');
    //     masterplay.dispatchEvent(event);
    // }
})
myprogressbar.addEventListener('change', () => {
    Audioelement.currentTime = myprogressbar.value * Audioelement.duration / 100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(songItemplay).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        if (Audioelement.paused || Audioelement.currentTime <= 0) {
            songIndex = parseInt(e.target.id);
            currentSongIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            Audioelement.src = `songs/${songIndex + 1}.mp3`;
            mastersongname.innerText = songs[songIndex].songName;
            Audioelement.currentTime = 0;
            Audioelement.play();
            playing.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }
        else {
            songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            Audioelement.src = `songs/${songIndex + 1}.mp3`;
            mastersongname.innerText = songs[songIndex].songName;
            Audioelement.currentTime = 0;
            Audioelement.pause();
            playing.style.opacity = 0;
            masterplay.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-pause-circle');

        }
        console.log(Audioelement)
    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0
    }
    else {

        songIndex += 1;
    }

    Audioelement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    Audioelement.currentTime = 0;
    Audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    playing.style.opacity = 1;

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {

        songIndex -= 1;
    }
    Audioelement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    Audioelement.currentTime = 0;
    Audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    playing.style.opacity = 1;

})