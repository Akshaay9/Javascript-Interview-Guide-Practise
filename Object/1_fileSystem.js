function FileSysytem() {
  this.directory = { root: {} };
  this.currDirectory = this.directory["root"];
  this.currentPath = "root";

  this.createDirectory = (directoryName) => {
    this.currDirectory[directoryName] = {};
  };
  this.getFileDirectory = function () {
    console.log(this.directory);
  };

  this.changeDirectory = function (pathName) {
    this.currDirectory = this.changeDirectoryHelper(pathName);
    this.currentPath = pathName;
  };

  this.changeDirectoryHelper = function (pathName) {
    const splitPath = pathName.split("-");
    let currDir = this.directory;
    splitPath.forEach((ele) => {
      currDir = currDir[ele];
    });
    return currDir;
  };

  this.addFiles = function (fileName) {
    if (this.currDirectory.file) {
      this.currDirectory.file.push(fileName);
    } else {
      this.currDirectory["file"] = [fileName];
    }
  };
  this.deleteFile = function (fileName) {
    this.currDirectory.file.filter((ele) => ele !== fileName);
  };

  this.deleteDirectory = function (name) {
    delete this.currDirectory[name];
  };
}

const fs = new FileSysytem();
fs.createDirectory("akshay");
fs.createDirectory("Banglore");
fs.changeDirectory("root-akshay");
fs.createDirectory("bg");
fs.changeDirectory("root");
fs.deleteDirectory("akshay");
fs.getFileDirectory();
