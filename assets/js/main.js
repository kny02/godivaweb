// 메인페이지(index.html) 전용 스크립트

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".hero__indicator button[aria-label='이전 슬라이드']");
  const nextBtn = document.querySelector(".hero__indicator button[aria-label='다음 슬라이드']");
  const countEl = document.querySelector(".hero__indicator-count");
  const segs = document.querySelectorAll(".hero__indicator-seg");

  const total = segs.length;
  let current = 0;

  function updateIndicator() {
    segs.forEach((seg, i) => seg.classList.toggle("is-active", i === current));
    countEl.textContent = `${current + 1}/${total}`;
  }

  prevBtn?.addEventListener("click", () => {
    current = (current - 1 + total) % total;
    updateIndicator();
  });

  nextBtn?.addEventListener("click", () => {
    current = (current + 1) % total;
    updateIndicator();
  });
});
