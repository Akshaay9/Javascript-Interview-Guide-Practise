window.timerID = [];

const mytimeInterval = window.setInterval;

window.setInterval = function (cb, delay) {
  const id = mytimeInterval(cb, delay);
  window.timerID.push(id);
  return id;
};

window.clearAllInterval = function () {
  while (window.timerID.length !== 0) {
    const firstElement = window.timerID.shift();
    clearInterval(firstElement);
  }
};

setInterval(() => {
  console.log("Hello");
}, 2000);
setInterval(() => {
  console.log("Hello2");
}, 500);
window.clearAllInterval(); // clears first two intervals
setInterval(() => {
  console.log("Hello3");
}, 1000);
