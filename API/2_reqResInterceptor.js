const originalFetch = window.fetch;

const requestInterceptor = (requestArguments) => {
  console.log("Before request");
};
const responseInterceptor = (response) => {
  console.log("After response", response);
};

window.fetch = async (args) => {
  requestInterceptor();
  const response = await originalFetch(args);
  responseInterceptor(response);
  return response;
};

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
