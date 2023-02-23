const getFinalResult = (obj, path) => {
    let level = 0;
    let pathWay = path.split(".");
  
    const recurse = (objext, levelWay, pathWay) => {
      if (levelWay === pathWay.length - 1) {
        console.log(objext[pathWay[levelWay]]);
      }
      for (let key in objext) {
        if (pathWay[levelWay] === key) {
          recurse(objext[key], levelWay + 1, pathWay);
        }
      }
    };
  
    recurse(obj, level, pathWay);
  };
  
  console.log(getFinalResult(obj, "a.b.c"));
  console.log(getFinalResult(obj, "a.b.c.0"));