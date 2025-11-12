const sections = document.querySelectorAll("section");
// window.addEventListener("scroll", () => {
//   sections.forEach((sec) => {
//     const rect = sec.getBoundingClientRect().top;
//     if (rect < window.innerHeight - 150) {
//       sec.classList.add("visible");
//     }
//   });
//});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto", // 한 화면에 여러 슬라이드 보이게
  spaceBetween: 20, // 슬라이드 간 간격
  loop: true, // 무한 루프
  freeMode: true, // 자연스럽게 스크롤
  speed: 10000, // 전체 이동 속도 (클수록 느리게)
  autoplay: {
    delay: 0, // 지연 없이
    disableOnInteraction: false,
  },
  freeModeMomentum: false,
});
$(".main-menu>li:lt(4)").hover(
  function () {
    console.log($(this).index());
    $(".bgmenu").css("display", "block");
  },
  function () {
    $(".bgmenu").css("display", "none");
  }
);
