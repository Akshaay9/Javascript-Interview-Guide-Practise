// https://codesandbox.io/s/serene-lucy-120zus?file=/src/index.js

const url = `https://jsonplaceholder.typicode.com/todos/1`;

const fetchData = async (url) => {
  try {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

const apiCall = (timer) => {
  const cache = {};
  return async function (url) {
    const cacheKey = `${url}`;
    const isApiAlredyCalled = cache[cacheKey];
    if (!isApiAlredyCalled || Date.now() > isApiAlredyCalled.isExpired) {
      console.log("Call API");

      const data = await fetchData(url);
      cache[cacheKey] = { data, isExpired: Date.now() + timer };
      return data;
    } else {
      console.log("Cache");

      return cache[cacheKey];
    }
  };
};

const cacheAPI = apiCall(1000);

cacheAPI(url).then((ele) => {});
setTimeout(() => {
  cacheAPI(url).then((ele) => {});
}, 500);
setTimeout(() => {
  cacheAPI(url).then((ele) => {});
}, 2000);
