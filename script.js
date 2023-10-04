$(document).ready(function () {
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "HUST",
      "Trường đại học Bách Khoa Hà Nội",
      "Ha Noi University of Science and Technology",
    ],
    typeSpeed: 130,
    backSpeed: 90,
    loop: true,
  });

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Oct 21, 2023 16:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
      //seconds
    }, 0);

  const scrollToBottomBtn = document.getElementById("scrollToMap");

  scrollToBottomBtn.addEventListener("click", function () {
    const pageHeight = document.documentElement.scrollHeight;

    // Scroll to the bottom of the page
    window.scrollTo({
      top: pageHeight,
      behavior: "smooth",
    });
  });

  const audio = document.getElementById("audio");
  const playButton = document.getElementById("wrapper");

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
