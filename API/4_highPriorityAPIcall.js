let callback = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  
  let callback2 = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  
  let urgentCallback = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/3")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  
  setTimeout(callback, 0);
  setTimeout(callback2, 0);
  queueMicrotask(urgentCallback);
  