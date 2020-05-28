let btns = document.getElementsByClassName('speaker');

var j = 0;
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e) {
    let speakerName = e.target.innerHTML;
    let selections = document.getElementById('selections');

    if (j >= 3) {
      console.log(j);
      alert("You can only choose 3 speakers");
      i = 2
    } else if (j == 2) {
      selections.innerHTML += (speakerName + "<br />");
      let buttonClick = document.getElementById('submit');
      buttonClick.addEventListener('click', function() {
        let ratings = document.getElementById('ratings');
        ratings.innerHTML = "<div class='successPulsate'>Thank you</div>";
      })
      j++
    } else {
      console.log(j);
      selections.innerHTML += (speakerName + "<br />");
      j++
    }
  });
}
