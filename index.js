var n=document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var drumName = this.innerHTML;

    buttonAnnimation(drumName)

  });
}

function buttonAnnimation(currentkey){
    var active = document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed")
    } , 100);
}
  