// Имитация авторизации ВКонтакте
function initVKAuth() {
  // В реальном приложении здесь будет редирект на VK OAuth
  console.log('Инициализация авторизации ВКонтакте');

  // Имитация успешной авторизации через таймаут
  setTimeout(() => {
    document.getElementById('authCard').classList.add('hidden');
    document.getElementById('createForm').classList.remove('hidden');

    // Заполняем текст из первого поля
    const songText = document.getElementById('songText').value;
    document.getElementById('trackText').value = songText;
  }, 1500);
}


function generateTrack() {
  const tokens = 50;
  const cost = 40;

  if (tokens < cost) {
    showModal('Недостаточно токенов! Необходимо пополнить баланс.');
    return;
  }

  const title = document.getElementById('trackTitle').value.trim();
  const text = document.getElementById('trackText').value.trim();
  const style = document.getElementById('musicStyle').value.trim();

  if (!title || !text || !style) {
    showModal('Пожалуйста, заполните все обязательные поля.');
    return;
  }

  console.log('Начинаем генерацию трека...');
  console.log('Списываем 40 токенов');

  showModal('Трек отправлен на генерацию! Переходим в библиотеку...');

  document.getElementById('createForm').classList.add('hidden');
  document.querySelector('.nav-btn.active').classList.remove('active');
  document.querySelectorAll('.nav-btn')[1].classList.add('active');
}

function showModal(message) {
  const oldModal = document.getElementById('customModal');
  if (oldModal) {
    oldModal.remove();
  }

  const modal = document.createElement('div');
  modal.id = 'customModal';
  modal.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: white;
                padding: 20px 30px;
                border-radius: 12px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1001;
                font-size: 16px;
                font-weight: 500;
                text-align: center;
            `;
  modal.textContent = message;
  document.body.appendChild(modal);

  setTimeout(() => {
    modal.style.transition = 'opacity 0.5s';
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 500);
  }, 3000);
}

document.querySelectorAll('.nav-btn').forEach((btn, index) => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    if (this.textContent === 'Библиотека') {
      document.getElementById('createForm').classList.add('hidden');
      document.getElementById('library').classList.remove('hidden');
    } else if (this.textContent === 'Создать') {
      document.getElementById('createForm').classList.remove('hidden');
    } else if (this.textContent === 'Выход') {
      showModal('Выход из системы...');
    }
  });
});

document.getElementById('create_audio').addEventListener('click', () => {
  document.getElementById('createForm').classList.remove('hidden');
  document.querySelector('.nav-btn.active').classList.remove('active');
  document.querySelectorAll('.nav-btn')[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const trackItems = document.querySelectorAll('.library__main-list .item');

  const playerAvatar = document.getElementById('playerAvatar');
  const playerTitle = document.getElementById('playerTitle');
  const playerArtist = document.getElementById('playerArtist');
  const playerArtistTextAudio = document.getElementById('playerArtistText');
  const playerAudioModel = document.getElementById('playerAudioModel');

  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentTimeEl = document.getElementById('currentTime');
  const totalDurationEl = document.getElementById('totalDuration');
  const progressBar = document.getElementById('progressBar');
  const volumeBtn = document.getElementById('volumeBtn');
  const volumeIcon = document.getElementById('volumeIcon');
  const muteIcon = document.getElementById('muteIcon');
  const volumeSlider = document.getElementById('volumeSlider');

  let currentTrackIndex = 0;
  let isPlaying = false;
  const tracks = Array.from(trackItems);


  function updateVolumeGradient(volumeValue) {
    const percentage = volumeValue * 100;
    volumeSlider.style.background = `linear-gradient(to right, #0071e3 0%, #0071e3 ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
  }

  function handleVolumeChange() {
    volumeSlider.value = audioPlayer.volume;
    updateVolumeGradient(audioPlayer.volume);

    if (audioPlayer.muted || audioPlayer.volume === 0) {
      volumeIcon.classList.add('hidden');
      muteIcon.classList.remove('hidden');
    } else {
      volumeIcon.classList.remove('hidden');
      muteIcon.classList.add('hidden');
    }
  }
  // -----------------------------------------------------------------

  function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;

    const track = tracks[index];
    const src = track.dataset.src;
    const title = track.dataset.title;
    const artist = track.dataset.artist;
    const avatar = track.dataset.avatar;
    const text = track.dataset.text;
    const model = track.dataset.model;

    if (audioPlayer.src !== src) {
      audioPlayer.pause();
      isPlaying = false;
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      audioPlayer.src = src;
    }

    playerTitle.textContent = title;
    playerArtist.textContent = artist;
    playerArtistTextAudio.textContent = text;
    playerAudioModel.textContent = model;

    playerAvatar.src = avatar;

    tracks.forEach(t => t.classList.remove('focus'));
    track.classList.add('focus');

    currentTrackIndex = index;

    currentTimeEl.textContent = '0:00';
    totalDurationEl.textContent = '0:00';
    progressBar.value = 0;

    progressBar.style.background = `linear-gradient(to right, #d2d2d7 0%, #d2d2d7 100%)`;
  }

  async function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
      showModal("Пожалуйста, выберите трек для воспроизведения.");
      return;
    }

    try {
      await audioPlayer.play();

      isPlaying = true;
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');

    } catch (error) {
      console.error("Ошибка при воспроизведении (возможно, Autoplay заблокирован):", error);

      isPlaying = false;
      audioPlayer.pause();
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');

      if (error.name === 'NotAllowedError' || error.name === 'NotSupportedError') {
        showModal("Воспроизведение заблокировано браузером. Нажмите кнопку 'Play' для старта.");
      } else {
        showModal("Произошла ошибка при попытке воспроизведения. Проверьте консоль.");
      }
    }
  }

  function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }

  async function playPauseToggle() {
    if (isPlaying) {
      pauseTrack();
    } else {
      await playTrack();
    }
  }

  async function nextTrack() {
    let newIndex = currentTrackIndex + 1;
    if (newIndex >= tracks.length) {
      newIndex = 0;
    }
    loadTrack(newIndex);
    await playTrack();
  }

  async function prevTrack() {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = tracks.length - 1;
    }
    loadTrack(newIndex);
    await playTrack();
  }

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function setDuration() {
    const duration = audioPlayer.duration;
    totalDurationEl.textContent = formatTime(duration);
    progressBar.max = duration;

    const trackItem = tracks[currentTrackIndex];
    if (trackItem) {
      const durationEl = trackItem.querySelector('.track-duration');
      if (durationEl) durationEl.textContent = formatTime(duration);
    }
  }

  function updateProgress() {
    const current = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    currentTimeEl.textContent = formatTime(current);

    if (!isNaN(duration) && duration > 0) {
      progressBar.value = current;
      const percentage = (current / duration) * 100;
      progressBar.style.background = `linear-gradient(to right, #0071e3 0%, #0071e3 ${percentage}%, #d2d2d7 ${percentage}%, #d2d2d7 100%)`;
    }
  }

  tracks.forEach((track, index) => {
    const tempAudio = new Audio(track.dataset.src);
    tempAudio.addEventListener('loadedmetadata', () => {
      const durationEl = track.querySelector('.track-duration');
      if (durationEl) durationEl.textContent = formatTime(tempAudio.duration);
    });

    track.addEventListener('click', async (e) => {
      if (e.target.closest('button')) {
        return;
      }
      loadTrack(index);
      await playTrack();
    });
  });

  playPauseBtn.addEventListener('click', playPauseToggle);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);

  audioPlayer.addEventListener('loadedmetadata', setDuration);
  audioPlayer.addEventListener('timeupdate', updateProgress);
  audioPlayer.addEventListener('ended', nextTrack);
  audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  });
  audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  });
  audioPlayer.addEventListener('error', (e) => {
    console.error("Audio error:", e);
    showModal("Ошибка загрузки аудио. Проверьте источник.");
    pauseTrack();
  });

  progressBar.addEventListener('input', (e) => {
    audioPlayer.currentTime = parseFloat(e.target.value);
    updateProgress();
  });


  volumeSlider.addEventListener('input', (e) => {
    const newVolume = parseFloat(e.target.value);
    audioPlayer.volume = newVolume;
    updateVolumeGradient(newVolume);
  });

  audioPlayer.addEventListener('volumechange', handleVolumeChange);

  volumeBtn.addEventListener('click', () => {
    audioPlayer.muted = !audioPlayer.muted;
  });

  // ----------------------------------------------------
  if (tracks.length > 0) {
    loadTrack(0);
  }
  updateVolumeGradient(audioPlayer.volume);
});


document.querySelectorAll('.openDialogMenu').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = button.closest('.block-dialog-menu').querySelector('.dialog-menu');
    dialog.classList.toggle('hidden');
  });
});
document.querySelector('.btn-description-close').addEventListener('click', () => {
  document.querySelector('.library__right').classList.toggle('hidden');
});
document.querySelector('.btn_left-menu').addEventListener('click', () => {
  document.querySelector('.library__left').classList.remove('hidden');
});
document.querySelector('.close_left-menu').addEventListener('click', () => {
  document.querySelector('.library__left').classList.add('hidden');
});
document.querySelector('.btn_burger-menu').addEventListener('click', () => {
  document.querySelector('.block-burger_menu').classList.toggle('hidden');
});