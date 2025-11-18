// =====================
// 기본 변수
// =====================
let currentGroup = document.querySelector("#icecream"); // 첫 시작 그룹
let wrapper = currentGroup.querySelector(".swiper-wrapper");
let slides = wrapper.querySelectorAll(".slide");

let index = 0;
let slideWidth = slides[0].offsetWidth + 30;
let visibleCount = 4;
let maxIndex = slides.length - visibleCount;

// =====================
// 자동 슬라이드 함수
// =====================
let slideInterval = null;

function startSlide() {
  stopSlide(); // 기존 슬라이드 제거

  slideInterval = setInterval(() => {
    index++;
    wrapper.style.transition = "transform 0.5s ease";
    wrapper.style.transform = `translateX(-${slideWidth * index}px)`;

    if (index > maxIndex) {
      setTimeout(() => {
        wrapper.style.transition = "none";
        wrapper.style.transform = "translateX(0)";
        index = 0;
      }, 500);
    }
  }, 3000);
}

function stopSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}

// 처음 시작할 때 아이스크림만 자동 슬라이드 실행
startSlide();

// =====================
// 탭 클릭
// =====================
const tabs = document.querySelectorAll(".best-category a.tab");
const groups = document.querySelectorAll(".slide-group");

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // Active 변경
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.target;

    // 그룹 전환
    groups.forEach(g => {
      g.style.display = (g.id === target) ? "block" : "none";
    });

    // 현재 그룹 업데이트
    currentGroup = document.querySelector(`#${target}`);
    wrapper = currentGroup.querySelector(".swiper-wrapper");
    slides = wrapper.querySelectorAll(".slide");

    // 슬라이드 초기화
    index = 0;
    slideWidth = slides[0].offsetWidth + 30;
    maxIndex = slides.length - visibleCount;

    wrapper.style.transition = "none";
    wrapper.style.transform = "translateX(0)";

    // =====================
    // ★ 그룹별 슬라이드 on/off ★
    // =====================
    if (target === "icecream") {
      // 슬라이드 켜기
      startSlide();
    } else {
      // 그릭 요거트 → 슬라이드 정지 + 고정
      stopSlide();
    }
  });
});
