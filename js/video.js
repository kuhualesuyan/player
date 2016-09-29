(function() {
    var video = document.getElementById('video');
    var img = document.getElementById('img');
    var img1 = document.getElementById('img1');
    var img3 = document.getElementById('img3');
    var span = document.getElementById('span');
    var div = document.getElementById('div');
    var span1 = document.getElementById('span1');
    var yinliang = document.getElementById('yinliang');
    var input = document.getElementById('input');

    video.onplay = function() {
        img1.style.display = "none";
        div.style.display = "block";
    }

    video.onpause = function() {
        img1.style.display = "block";
    }

    img3.onclick = function() {
        video.play();
    }


    var btn = document.getElementById('btn');
    btn.onclick = function() {
        if (video.paused) {
            video.play();
            img.src = "images/stop.jpg";
        } else {
            video.pause();
            img.src = "images/start.jpg";
        }
    }

    // 设置video全屏
    var btn3 = document.getElementById('btn3');
    btn3.onclick = function() {
            if (video.fullScreenFlag) {
                video.webkitCancelFullScreen();
            } else {
                video.webkitRequestFullscreen();
            }
        }
        // 设置快进
    var btn4 = document.getElementById('btn4');
    btn4.onclick = function() {
        video.playbackRate = 10;
    }

    var btn5 = document.getElementById('btn5');
    btn5.onclick = function() {
        video.playbackRate = 0.1;
    }

    var btn6 = document.getElementById('btn6');
    btn6.onclick = function() {
            video.playbackRate = 1;
        }
        // 设置进度条和时间
        // offsetwidth:是元素相对父元素的偏移宽度。等于border+padding+width
        // toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
    video.ontimeupdate = function() {
        var time = video.duration;
        document.getElementById('div1');
        document.getElementById('div2');
        var percent = video.currentTime / video.duration;
        div2.style.width = percent * (div1.offsetWidth) + "px";
        span.innerHTML = (percent * 100).toFixed(1);

        var sj = video.currentTime;
        var miao1 = (parseInt(sj)) % 60;
        var fen1 = (parseInt(sj / 60)) % 60;
        if (miao1 < 10) {
            miao1 = '0' + miao1;
        }
        if (fen1 < 10) {
            fen1 = '0' + fen1;
        }
        var time = video.duration;
        var miao = (parseInt(time)) % 60;
        var fen = (parseInt(time / 60)) % 60;

        div2.innerHTML = fen1 + ':' + miao1 + '/' + fen + ":" + miao;
    }

    var btn7 = document.getElementById('btn7');
    btn7.onclick = function() {
            if (video.muted == true) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        }
        // 设置声音的大小
    var btn9 = document.getElementById('btn9');
    btn9.classList.add('btn9');
    btn9.onclick = function() {
        video.volume -= 0.1;
        yinliang3.style.left = video.volume * 100 + "px";
    }
    var btn10 = document.getElementById('btn10');
    btn10.classList.add('btn10');
    btn10.onclick = function() {
            video.volume += 0.1;
            yinliang3.style.left = video.volume * 100 + "px";
        }
        // 点击x,所有东西消失
    var btn8 = document.getElementById('btn8');
    btn8.onclick = function() {
        video.classList.add('hide');
        mydiv.classList.add('hide');
        div.classList.add('hide');
        div1.classList.add('hide');
        yinliang.classList.add('hide');
        input.classList.add('hide');
        bf.classList.add('hide');
    }
    var bf = document.getElementById('bf');
    bf.classList.add('bf');
    bf.onclick = function(){
        var file = input.files[0];
        var url = URL.createObjectURL(file);
        video.src = url;
        video.onplay();
    }
}(window))
