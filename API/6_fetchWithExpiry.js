const url = `https://jsonplaceholder.typicode.com/todos/1`;

const fetchWithExpiry = async (timer) => {
  return new Promise((res, rej) => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(url, { signal }).then((data) => {
      data.json().then((ele) => {
        res(ele);
      });
    });
    setTimeout(() => {
      abortController.abort();
    }, timer);
  });
};

fetchWithExpiry(0).then((ele) => {
  console.log("ele", ele);
});
