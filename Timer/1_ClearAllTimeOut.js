window.timerID = [];

window.clearAllTimeout = function () {
  while (window.timerID.length) {
    clearTimeout(window.timerID.pop());
  }
};

const mySetTimeOut = window.setTimeout;

window.setTimeout = function (fn, delay) {
  const id = mySetTimeOut(fn, delay);
  window.timerID.push(id);
  return id;
};

setTimeout(() => {
  console.log("hello");
}, 2000);
setTimeout(() => {
  console.log("hello1");
}, 3000);
setTimeout(() => {
  console.log("hello2");
}, 4000);
setTimeout(() => {
  console.log("hello3");
}, 5000);
window.clearAllTimeout();
setTimeout(() => {
  console.log("hello4");
}, 5000);
