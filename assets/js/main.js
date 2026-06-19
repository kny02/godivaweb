// 메인페이지(index.html) 전용 스크립트

const SLIDE_DATA = [
  {
    title: "A Century of Chocolate Heritage",
    desc: "Crafted since 1926 with artisanal tradition and rich flavor, <br>discover a special collection celebrating Godiva's 100th anniversary.",
  },
  {
    title: "A New Beginning of Sweetness", // 2번째 슬라이드 제목
    desc: "Experience the rich flavor of our Triple Chocolate Cake,<br>crafted with the perfect harmony of three distinct chocolates.",  // 2번째 슬라이드 설명
  },
  {
    title: "A Special Gift Inspired by Spring", // 3번째 슬라이드 제목
    desc: "Celebrate the warmth and beauty of the season with our limited-edition Spring Gift Collection, available for a limited time only.",  // 3번째 슬라이드 설명
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".hero__indicator button[aria-label='이전 슬라이드']");
  const nextBtn = document.querySelector(".hero__indicator button[aria-label='다음 슬라이드']");
  const playBtn = document.querySelector(".hero__indicator button[aria-label='재생/정지']");
  const playImg = playBtn?.querySelector("img");
  const countEl = document.querySelector(".hero__indicator-count");
  const segs = document.querySelectorAll(".hero__indicator-seg");
  const slides = document.querySelectorAll(".hero__slide");
  const titleEl = document.querySelector(".hero__title");
  const descEl = document.querySelector(".hero__desc");
  const contentEl = document.querySelector(".hero__content");

  const total = segs.length;
  const INTERVAL = 4000;
  let current = 0;
  let isPlaying = true;
  let timer = null;

  function goTo(index) {
    slides[current].classList.remove("is-active");
    segs[current].classList.remove("is-active");
    current = (index + total) % total;
    slides[current].classList.add("is-active");
    segs[current].classList.add("is-active");
    countEl.textContent = `${current + 1}/${total}`;

    contentEl.classList.remove("is-visible");
    setTimeout(() => {
      titleEl.innerHTML = SLIDE_DATA[current].title;
      descEl.innerHTML = SLIDE_DATA[current].desc;
      contentEl.classList.add("is-visible");
    }, 200);
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function stopAuto() {
    clearInterval(timer);
    timer = null;
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playImg.src = "assets/images/common/pause_icon.png";
      playImg.alt = "정지";
      startAuto();
    } else {
      playImg.src = "assets/images/common/play_icon.png";
      playImg.alt = "재생";
      stopAuto();
    }
  }

  prevBtn?.addEventListener("click", () => {
    stopAuto();
    goTo(current - 1);
    if (isPlaying) startAuto();
  });

  nextBtn?.addEventListener("click", () => {
    stopAuto();
    goTo(current + 1);
    if (isPlaying) startAuto();
  });

  playBtn?.addEventListener("click", togglePlay);

  startAuto();
});
