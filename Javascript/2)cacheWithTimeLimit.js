var TimeLimitedCache = function () {
    this.chache = new Map();
  };
  
  TimeLimitedCache.prototype.set = function (key, value, duration) {
    const isAlredyExist = this.chache.get(key);
  
    if (isAlredyExist) {
      clearTimeout(isAlredyExist.timeOut);
    }
  
    const timeOut = setTimeout(() => {
      this.chache.delete(key);
    }, duration);
  
    this.chache.set(key, {
      value,
      timeOut,
    });
  
    return Boolean(isAlredyExist);
  };
  
  TimeLimitedCache.prototype.get = function (key) {
    if (this.chache.has(key)) {
      return this.chache.get(key).value;
    }
    return -1;
  };
  
  TimeLimitedCache.prototype.count = function () {
    return this.chache.size;
  };