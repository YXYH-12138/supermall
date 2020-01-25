export function debounce(callback, delay = 50) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
