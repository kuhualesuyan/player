(function() {
    var video = document.getElementById('video');
    var stop = document.getElementById('stop');
    var start = document.getElementById('start');
    var span = document.getElementById('span');
    var div = document.getElementById('div');
    var span1 = document.getElementById('span1');
    var yinliang = document.getElementById('yinliang');
    var input = document.getElementById('input');
    video.loop = true;
    video.onplay = function() {
        start.style.display = "none";
        div.style.display = "block";
    }

    video.onpause = function() {
        start.style.display = "block";
    }


    start.onclick = function() {
        video.play();
    }

    stop.onclick = function() {
        if (video.paused) {
            video.play();
            stop.src = "images/stop.jpg";
        } else {
            video.pause();
            stop.src = "images/start.jpg";
        }
    }

    // 设置video全屏
    var quanping = document.getElementById('quanping');
    quanping.onclick = function() {
            if (video.fullScreenFlag) {
                video.webkitCancelFullScreen();
            } else {
                video.webkitRequestFullscreen();
            }
        }

        // 设置快进和慢放
    var kuanjin = document.getElementById('kuanjin');
    kuanjin.onclick = function() {
        video.playbackRate = 10;
    }

    var manfang = document.getElementById('manfang');
    manfang.onclick = function() {
        video.playbackRate = 0.1;
    }

    var zhengchang = document.getElementById('zhengchang');
    zhengchang.onclick = function() {
            video.playbackRate = 1;
        }
        // 设置进度条和时间，拖动
        // offsetwidth:是元素相对父元素的偏移宽度。等于border+padding+width
        // toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
    video.ontimeupdate = function() {
        var time = video.duration;
        document.getElementById('xianshidiv');
        document.getElementById('jindudiv');
        var percent = video.currentTime / video.duration;
        jindudiv.style.width = percent * (xianshidiv.offsetWidth) + "px";
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

        jindudiv.innerHTML = fen1 + ':' + miao1 + '/' + fen + ":" + miao;
    }
    jindudiv.onmousedown = function() {
        jindudiv.onmousemove = function() {
            video.currentTime = parseInt(event.offsetX) / 299.301 * video.duration;
        }
        document.onmouseup = function() {
            jindudiv.onmousemove = null;
        }
    }
    xianshidiv.onclick = function() {
            video.currentTime = parseInt(event.offsetX) / 300 * (video.duration);
        }

        // 设置静音
    var shengyin = document.getElementById('shengyin');
    shengyin.onclick = function() {
            if (video.muted == true) {
                video.muted = false;
                dianjiyinliang.style.left = video.volume * 100 + "px";
            } else {
                video.muted = true;
                dianjiyinliang.style.left = "0px";
            }
        }
        // 设置声音的大小
    var ylbtn = document.getElementById('ylbtn');
    ylbtn.classList.add('ylbtn');
    ylbtn.onclick = function() {
        video.volume -= 0.1;
        dianjiyinliang.style.left = video.volume * 100 + "px";
    }
    var btnyl = document.getElementById('btnyl');
    btnyl.classList.add('btnyl');
    btnyl.onclick = function() {
            video.volume += 0.1;
            dianjiyinliang.style.left = video.volume * 100 + "px";
        }

    // 点击x,所有东西消失
    var xiaoshibtn = document.getElementById('xiaoshibtn');
    xiaoshibtn.onclick = function() {
        video.classList.add('hide');
        mydiv.classList.add('hide');
        input.classList.add('hide');
        bf.classList.add('hide');
        video.pause();
    }
    var bf = document.getElementById('bf');
    bf.classList.add('bf');
    bf.onclick = function() {
        var file = input.files[0];
        var url = URL.createObjectURL(file);
        video.src = url;
        video.onplay();
    }
}(window))
