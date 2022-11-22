import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const CURRENT_TIME = "videoplayer-current-time";

const onPlay = function({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

if(localStorage.getItem(CURRENT_TIME) === null) {
    return
} else {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}

