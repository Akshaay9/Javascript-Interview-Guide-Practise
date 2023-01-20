const getTestFun = (targetCount) => {
    let count = 0;
    return () => {
      count += 1;
      if (count < 5) {
        throw new Error("Error Occured");
      } else {
        Promise.resolve("Sucess");
      }
    };
  };
  
  const wait = (time) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, time);
    });
  };
  
  const retryAfterNTimes = async (retryCnt, retryTime, callBackFun) => {
    try {
      callBackFun();
    } catch (error) {
      if (retryCnt === 0) {
        throw new Error("Error COmpleted");
      } else {
        await wait(retryTime);
        console.log(`Attempting retyring`, retryCnt);
        await retryAfterNTimes((retryCnt -= 1), retryTime, callBackFun);
      }
    }
  };
  
  const test = async () => {
    try {
      await retryAfterNTimes(3, 1000, getTestFun());
    } catch (error) {
      Promise.reject(error);
    }
  };
  
  test()
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  