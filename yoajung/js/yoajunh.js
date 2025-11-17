// =====================
// 슬라이드 관련 요소
// =====================
const wrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".slide");

let index = 0; // 현재 슬라이드 인덱스
const slideWidth = slides[0].offsetWidth + 30; // 슬라이드 폭 + margin
const visibleCount = 4; // 한 화면에 보이는 슬라이드 개수
let maxIndex = slides.length - visibleCount; // 마지막 인덱스

// =====================
// 슬라이드 이동 함수
// =====================
function slideMove() {
  index++;
  wrapper.style.transition = "transform 0.5s ease";
  wrapper.style.transform = `translateX(-${slideWidth * index}px)`;

  // 마지막 슬라이드 이후에는 처음으로 리셋
  if (index > maxIndex) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.style.transform = "translateX(0)";
      index = 0;
    }, 500);
  }
}

// 자동 슬라이드 실행 (3초마다)
let slideInterval = setInterval(slideMove, 3000);

// =====================
// 탭 클릭 관련
// =====================
const tabs = document.querySelectorAll(".best-category a");
const slideGroups = document.querySelectorAll(".slide-group"); // 각 탭별 슬라이드 그룹

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // 1. 탭 active 변경
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // 2. 해당 이미지 그룹 표시
    const target = tab.dataset.target; // <a data-target="yogurt"> 처럼 id 매칭
    slideGroups.forEach(group => {
      group.style.display = (group.id === target) ? "flex" : "none";
    });

    // 3. 슬라이드 초기화
    index = 0;
    wrapper.style.transition = "none";
    wrapper.style.transform = "translateX(0)";

    // 4. maxIndex 업데이트 (선택한 그룹 슬라이드 수에 맞게)
    const currentSlides = document.querySelectorAll(`#${target} .slide`);
    maxIndex = currentSlides.length - visibleCount;
  });
});
