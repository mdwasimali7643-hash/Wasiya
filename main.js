const music = document.getElementById('music');
const playbtn = document.getElementById('playbtn');

playbtn.addEventListener("click", function() {
  if (music.paused) {
    music.play();
    playbtn.textContent = '《pause》';
    } else {
      music.pause();
      playbtn.textContent = '♡《Play》♡';
    }
  }
);

/// timer

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const months = now.getMonth() + 5;
const days = now.getDay() - 7;


const display = document.getElementById('display');

function update() {
  display.textContent = `${months}mo:${days}d:${hours}h:${minutes}m:${seconds}s`;
}
update();
setInterval(update, 1000)

const lovebtn = document.getElementById('lovebtn');

lovebtn.addEventListener('click', function() {
  lovebtn.textContent = '💗I LOVE YOUUUU DIYAAA💗'
});
