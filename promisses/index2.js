//creating promise
function toastBreadReady() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    let wifeMood = 4;
    if (wifeMood >= 5) {
      resolve("toast is ready");
    } else {
      reject("mood is not good");
    }
    // }, 2000);
  });
}
// promise
function eggFryReady() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    let wifeMood = 4;
    if (wifeMood >= 5) {
      resolve("egg is ready");
    } else {
      reject("mood is noot good");
    }
    // }, 3000);
  });
}
toastBreadReady()
  .then((arg) => {
    console.log(arg);
    return eggFryReady();
  })
  .then((arg1) => {
    console.log(arg1);
  })
  .catch((error) => {
    console.log(error);
  });
