const compose =
  (...fns) =>
  (args) => {
    return fns.reduceRight((acc, ele) => acc.then(ele), Promise.resolve(args));
  };

// Example-
compose(
  redirectToHomepage,
  displayNotification,
  logUserIn
)(user).then((result) => `Do whatever you want with the ${result}`);

// how it behaves -
logUserIn(user).then(displayNotification).then(redirectToHomepage);
