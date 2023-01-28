const timer = (initialValue, increaseValue) => {
    let timerID = null;
  
    const startTimer = () => {
      if (timerID) return;
      timerID = setInterval(() => {
        initialValue += increaseValue;
        console.log(initialValue);
      }, 1000);
    };
  
    const stopTimer = () => {
      clearInterval(timerID);
      timerID = null;
    };
  
    return {
      startTimer,
      stopTimer,
    };
  };
  
  const newTimer = timer(10, 2);
  newTimer.startTimer();
  
  setTimeout(() => {
    newTimer.stopTimer();
  }, 5000);