const vid = document.getElementsByTagName('video')[0];
const spans = document.querySelectorAll('.textWrapper span');


//Script for highlighting transcript text as video plays

vid.addEventListener('timeupdate', function() {
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

//Script for playing video after clicking a place in the transcript text

function clickText(element) {
   element.addEventListener('click', function() {
     let startTime = element.getAttribute('data-start');
     if (element) {
       vid.currentTime = startTime;
       vid.play();
     }
  });
}

for (let i = 0; i < spans.length; i += 1) {
  let span = spans[i];
  clickText(span);
}
