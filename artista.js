        function playPause(audioId) {
            const audio = document.getElementById(audioId);
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }