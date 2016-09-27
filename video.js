(function() {
    var video = document.getElementById('video');
    var img = document.getElementById('img');
    video.onplay = function() {
        img.style.display = "none";
    }

    video.onpause = function() {
        img.style.display = "block";
    }

    img.onclick = function() {
        video.play();
    }

    var btn = document.getElementById('btn');
    btn.onclick = function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    var btn1 = document.getElementById('btn1');
    btn1.onclick = function() {
        video.volume += 0.1;
    }

    var btn2 = document.getElementById('btn2');
    btn2.onclick = function() {
        video.volume -= 0.1;
    }

    var btn3 = document.getElementById('btn3');
    btn3.onclick = function() {
        if (video.fullScreenFlag) {
            video.webkitCancelFullScreen();
        } else {
            video.webkitRequestFullscreen();
        }
    }
}(window))
