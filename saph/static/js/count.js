const counter = document.getElementById('counter');
let count = 1000;  // 숫자를 수정하는 경우
setInterval(()=> counter.innerText = ++count, 1000);

if (module.hot) {
    module.hot.dispose(() => {
      clearInterval(timer);
    });
    module.hot.accept();
}