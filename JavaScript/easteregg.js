var letterO = document.getElementById('letter');
 var modal = document.getElementById('modal');
 var input = document.getElementById('input');
 var close = document.getElementById('close');

 letterO.onclick = function() {
   if (modal.className === 'modal-hidden') {
     modal.className = 'modal-shown';
   } else {
     modal.className = 'modal-hidden';
   }
 }

 close.onclick = function() {
   modal.className = 'modal-hidden';
 }

input.addEventListener('keyup', function(e) {
  console.log(e.target.value);
  if (e.target.value == 39887) {
    alert("You are the winner. Please contact Tim at the front desk to claim your prize.")
  } else if (e.target.value !== 39887 & e.target.value.length >= 5){
    alert("Error. Your code is invalid.")
    input.value = '';
  }
});
