let _deg = 0;
let _scale = 1;
let _left = 0;
let _top = 0;

const SCALE_FACTOR = 100;

window.onload = function() {
    const player = getPlayer();
    if (player != null) {
        player.onmousemove = onMouseMove;
    }
}

function getPlayer() {
    const players = document.getElementsByClassName("html5-video-player")
    return players.length > 0 ? players[0] : null;
}

function getVideo() {
    const videos = document.getElementsByClassName("html5-main-video")
    return videos.length > 0 ? videos[0] : null;
}

function onMouseMove(ev){
    if (!ev.ctrlKey && !ev.altKey)
        return;

    if (ev.ctrlKey && ev.altKey)
        return;

    const video = getVideo();
    if (video == null)
        return;

    var x = ev.movementX;
    var y = ev.movementY;

    if (ev.ctrlKey) {
        _deg += x;
        _scale += y / SCALE_FACTOR;
        video.style.transform = "rotate(" + _deg + "deg) scale(" + _scale + ")";
    } else if (ev.altKey) {
        _left += x;
        _top += y;
        video.style.left = _left + 'px';
        video.style.top = _top + 'px';
    }
}
