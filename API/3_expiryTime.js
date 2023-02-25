const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      Promise.reject(error);
    }
  };
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  let cache = {};
  const apiCall = (time) => {
    return async (url) => {
      const isApiCalled = cache[url];
  
      if (!isApiCalled || Date.now() > isApiCalled.expiry) {
        console.log("from API");
  
        cache[url] = { response: "data", expiryTime: Date.now() + time };
  
        const data = await fetchData(url);
  
        return data;
      } else {
        console.log("from cache");
        return isApiCalled.response;
      }
    };
  };
  
  const cacheAPI = apiCall(5000);
  
  cacheAPI(url).then((ele) => {
    console.log(ele);
  });
  cacheAPI(url).then((ele) => {
    console.log(ele);
  });
  cacheAPI(url).then((ele) => {
    console.log(ele);
  });
  cacheAPI(url).then((ele) => {
    console.log(ele);
  });
  