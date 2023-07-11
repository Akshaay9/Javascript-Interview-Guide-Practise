function BrowserHistory() {
  this.history = [];
  this.count = -1;

  this.current = () => {
    console.log(this.history[this.count]);
  };

  this.goForward = () => {
    this.count = Math.max(this.history.length - 1, ++this.count);
  };
  this.goBackward = () => {
    this.count = Math.min(0, --this.count);
  };
  this.visitCurrent = (val) => {
    this.history[++this.count] = val;
  };
}

const bh = new BrowserHistory();

bh.visitCurrent("a");
bh.current();
bh.visitCurrent("b");
bh.current();
bh.goBackward();
bh.current();
bh.goForward();
bh.current();
