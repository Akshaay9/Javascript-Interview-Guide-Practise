function makeCall() {
    fetch("https://jsonplaceholder.typicode.com/photos", { signal })
      .then((response) => {
        console.log("complete", response);
      })
      .catch((err) => {
        console.error(`error: ${err.message}`);
      });
  }
  
  const abortController = new AbortController();
  const signal = abortController.signal;
  
  const download = document.getElementById("download");
  const abort = document.getElementById("abort");
  
  download.addEventListener("click", () => {
    makeCall();
  });
  
  abort.addEventListener("click", () => {
    console.log("abort");
  
    abortController.abort();
  });
  