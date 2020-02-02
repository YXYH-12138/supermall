export function debounce(callback, delay = 50) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

export function dateTimeFormat(date, format) {
  date = new Date(date)
  let year = date.getFullYear().toString();
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, year.substring(4 - RegExp.$1.length))
  }
  let objDate = {
    'MM': date.getMonth() + 1,
    'dd': date.getDate(),
    'hh': date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    'HH': date.getHours(),
    'mm': date.getMinutes(),
    'ss': date.getSeconds()
  }
  for (let o in objDate) {
    if (new RegExp(`(${o})`).test(format)) {
      format = format.replace(RegExp.$1, objDate[o].toString().padStart(2, '0'));
    }
  }
  return format
}
