const constcreateAsyn = () => {
    const value = Math.floor(Math.random() * 10);
    return (cb) => {
      setTimeout(() => {
        cb(value);
      }, value * 100);
    };
  };
  
  function asyncParallel(tasks, callback) {
    const results = [];
    let tasksCompleted = 0;
    tasks.forEach((asyncTask) => {
      // he is invoking asyncTask and passing callBack Function
  
      const cb = (value) => {
        results.push(value);
        tasksCompleted++;
        if (tasksCompleted >= tasks.length) {
          callback(results);
        }
      };
      asyncTask(cb);
    });
  }
  
  const taskList = [constcreateAsyn(), constcreateAsyn(), constcreateAsyn()];
  
  asyncParallel(taskList, (result) => {
    console.log("results", result);
  });
  