// 모든 페이지 공통 스크립트 (헤더 모바일 메뉴 등)

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header__menu-btn");
  const nav = document.querySelector(".header__nav");
  const header = document.querySelector(".header");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }

  // 히어로(또는 페이지 헤더) 영역을 벗어나면 헤더에 배경색을 채워 가독성 확보
  if (header) {
    const toggleScrolled = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 60);
    };
    toggleScrolled();
    window.addEventListener("scroll", toggleScrolled);
  }
});
