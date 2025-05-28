const frame = "section";
const box = "article";
const speed = "0.5s";
const activeClass = "on";
const btn = document.querySelectorAll("main ul li");
let grid;

window.addEventListener("load", () => {
  init();
  filter(btn);
});

//화면 초기화 함수 정의
function init() {
  grid = new Isotope(frame, {
    itemSelector: box, //배치할 요소명
    columnWidth: box, //너빗값을 구할 요소명
    transitionDuration: speed, //화면 재배치 시 요소가 움직이는 속도
  });
}

//정렬 버튼 기능 함수 정의
function filter(arr) {
  for (let el of arr) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      //변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 저장
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        filter: sort,
      });

      for (let el of arr) {
        el.classList.remove(activeClass);
      }

      e.currentTarget.classList.add(activeClass);
    });
  }
}
