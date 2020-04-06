var $btn = document.getElementById("tog"),
  $mov = document.getElementById("move"),
  $one = document.getElementById("one"),
  $two = document.getElementById("two"),
  $three = document.getElementById("three");

var check = true;

$btn.onclick = function () {
  if (check === true) {
    $mov.style.left = "25px";
    $one.innerHTML = "&dollar;19.99";
    $two.innerHTML = "&dollar;24.99";
    $three.innerHTML = "&dollar;39.99";

    check = false;
  } else {
    $mov.style.left = "5px";
    $one.innerHTML = "&dollar;199.99";
    $two.innerHTML = "&dollar;249.99";
    $three.innerHTML = "&dollar;399.99";
    check = true;
  }
};
