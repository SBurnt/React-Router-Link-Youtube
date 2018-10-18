function httpGet(url) {

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function () {
      resolve(xhr.response);
    }
    xhr.onerror = function () {
      reject("error");
    }
    xhr.responseType = "json";
    xhr.send();
  });
}

function getPrettyDateToday(timestamp) {
  var date = new Date(timestamp);
  var options = {
    //era: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    // weekday: 'short',
    //timezone: 'UTC',
    // hour: '2-digit',
    // minute: '2-digit',
    //second: 'numeric'
  };
  return date.toLocaleString("ru", options);
}

function renderMarkupTomorrow(pogoda) {
  // console.log(pogoda);
  let arrTomorrow = [];
  for (var i = 0; i < pogoda.length; i += 8) {
    arrTomorrow.push(pogoda[i]);
  }
  // console.log("arr", arrTomorrow);
  return arrTomorrow;
}

export {
  getPrettyDateToday,
  httpGet,
  renderMarkupTomorrow
}
