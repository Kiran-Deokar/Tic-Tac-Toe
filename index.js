let w = [];
let x = 0;
$(document).ready(function () {   
   
})
$("td").click(function () {
  x++;
  if (x % 2 == 0) {
    $(this).html("x");
    $(this).css({pointerEvents: "none"})
    w[$(this).attr("id")] = "X";
  } else {
    $(this).html("O");
    $(this).css({pointerEvents: "none"})
    w[$(this).attr("id")] = "O";
  }

  if (w[1] == w[2] && w[2] == w[3] && w[1] != undefined) {
    winner("Player "+ w[1]+ " Win.")
  } else if (w[1] == w[4] && w[4] == w[7] && w[1] != undefined) {
    winner("Player "+ w[1]+ " Win.")
  } else if (w[1] == w[5] && w[5] == w[9] && w[1] != undefined) {
    winner("Player "+ w[1]+ " Win.")
  } else if (w[2] == w[5] && w[5] == w[8] && w[2] != undefined) {
    winner("Player "+ w[2]+ " Win.")
  } else if (w[4] == w[5] && w[5] == w[6] && w[4] != undefined) {
    winner("Player "+ w[4]+ " Win.")
  } else if (w[7] == w[8] && w[8] == w[9] && w[7] != undefined) {
    winner("Player "+ w[7]+ " Win.")
  } else if (w[3] == w[6] && w[6] == w[9] && w[3] != undefined) {
    winner("Player "+ w[3]+ " Win.")
  } else if (w[3] == w[5] && w[5] == w[7] && w[3] != undefined) {
    winner("Player "+ w[3]+ " Win.")
  } else if (
    w[1] != undefined &&
    w[2] != undefined &&
    w[2] != undefined &&
    w[3] != undefined &&
    w[4] != undefined &&
    w[5] != undefined &&
    w[6] != undefined &&
    w[7] != undefined &&
    w[8] != undefined &&
    w[9] != undefined
  ) {
    winner("Draw")
  }
});

function winner(w){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        title: w
      })
      setTimeout(function(){window.location.reload()},4000)
}