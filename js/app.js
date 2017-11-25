const vid = document.getElementsByTagName('video')[0];
const spans = document.querySelectorAll('.textWrapper span');


//Script for highlighting transcript text as video plays

vid.addEventListener('timeupdate', () => {
  for (let i = 0; i < spans.length; i += 1) {
    let startTime = spans[i].getAttribute('data-start');
    let endTime = spans[i].getAttribute('data-end');
    let currentTime = vid.currentTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      spans[i].classList.add('highlight');
    } else {
      spans[i].classList.remove('highlight');
    }
  }
});
