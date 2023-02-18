const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${hour}:${minute}:${second}`;
  };
  
  setInterval(() => {
    console.log(getTime());
  }, 1000);
  