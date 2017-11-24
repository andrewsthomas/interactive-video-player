const vid = document.getElementsByTagName('video')[0];
const span = document.getElementsByClassName('textWrapper').getElementsByTagName('span');

//Script for highlighting transcript text as video plays

vid.addEventListener('timeupdate', () => {
  for (let i = 0; i < span.length; i += 1) {
    let startTime = span[i].getAttribute('data-start');
    let endTime = span[i].getAttribute('data-end');
    let currentTime = vid.currentTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      span[i].classList.add('highlight');
    } else {
      span[i].classList.remove('highlight');
    }
  }
});
