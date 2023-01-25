class Task {
  constructor(dependencies, job) {
    this.dependencies = dependencies
      ? dependencies.filter(
          (ele) => ele instanceof Task && ele.isCompleted === false
        )
      : [];
    this.isCompleted = false;
    this.subscribeList = [];
    this.subscribeCount = this.dependencies.length;
    this.job = job;

    this.processJob(this.dependencies);
  }

  processJob(dependencies) {
    if (dependencies.length && this.dependencies.length > 0) {
      for (const dependent of dependencies) {
        dependent.subscripbeDependency(this.trackDependecy.bind(this));
      }
    } else {
      this.job(this.done.bind(this));
    }
  }

  trackDependecy() {
    this.subscribeCount--;
    if (this.subscribeCount === 0) {
      this.job(this.done.bind(this));
    }
  }

  subscripbeDependency(cb) {
    this.subscribeList.push(cb);
  }

  done() {
    this.isCompleted = true;
    for (const callback of this.subscribeList) {
      callback();
    }
  }
}
//
//
const processA = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process A");
    done();
  }, 100);
});

const processB = new Task([processA], (done) => {
  setTimeout(() => {
    console.log("Process B");
    done();
  }, 1500);
});

const arr = [processB];

const createAllDoneInstance = (done) => new Task(arr, done);

createAllDoneInstance((done) => {
  done();
});
