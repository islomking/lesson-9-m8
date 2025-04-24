const songs = [
    {
      title: "Matushka",
      artist: "Ultra funk",
      audio: "satirina - Matushka.mp3",
      cover: "satirina.jpg"
        
    },
    {
      title: "GLORY",
      artist: "Ogryzek",
      audio: "Ogryzek - GLORY.mp3",
      cover: "ogryzek.jpg"
    }
  ];

  

  const audio = document.getElementById('audio');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const cover = document.getElementById('cover');
  const songSelect = document.getElementById('songSelect');
  const playPause = document.getElementById('playPause');

  let isPlaying = false;

  songSelect.addEventListener('change', () => {
    const selected = songs[songSelect.value];
    audio.src = selected.audio;
    title.textContent = selected.title;
    artist.textContent = selected.artist;
    cover.src = selected.cover;
    audio.play();
    isPlaying = true;
    playPause.textContent = '⏸️';
  });

  playPause.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPause.textContent = '▶️';
    } else {
      audio.play();
      playPause.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
  });