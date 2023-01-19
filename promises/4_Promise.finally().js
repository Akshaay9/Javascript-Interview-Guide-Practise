Promise.prototype.myfinally = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  return this.then(
    (res) => Promise.resolve(callback()).then(() => res),
    (rej) =>
      Promise.resolve(
        callback().catch(() => {
          throw rej;
        })
      )
  );
};

const p = Promise.resolve(4);

p.then((ele) => {
  console.log(ele);
})
  .myfinally(() => {
    console.log("finally");
  })
  .then(() => {
    console.log();
  });


const p1 = Promise.rejet(4);

p.then((ele) => {
  console.log(ele);
})
  .myfinally(() => {
    console.log("finally");
  })
  .catch(() => {
    console.log("ele");
  });
