var startDate = new Date('August 17, 2020 00:00:00').getTime();
var x = setInterval(function() {
  var currentDate = new Date().getTime();
  var remainingTime = startDate - currentDate;

  var d = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var h = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = (d + ' Days' + ' ' + h + ' Hours' + ' ' + m + ' Minutes' + ' ' + s + ' Seconds');

  if (remainingTime < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = "Expired. The conference has started/already ended.";
  }
}, 1000);
