function setIframe() {
    var selection = document.getElementById("fig_select").value;
    document.getElementById("figure-display").src = selection
}

function subButtonSetIframe(clickedButton) {
  var subButtons = document.querySelectorAll("button.cod-sub-button");
  subButtons.forEach(function(button) {
    button.classList.remove('activeButton')
  });
  clickedButton.classList.add('activeButton');
  document.getElementById("figure-display").src = clickedButton.value;
}


function openPanel() {
    var panel = document.getElementById("panel");
    var acc = document.getElementsByClassName("accordion")[0]
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    acc.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
}

$(document).ready(function(){
  $("#fig_select").on("change", function(){
    switch($("#fig_select :selected").val()){
      case "Figures/remote_number.html":
        document.getElementById("buttonBlock").style.display = 'flex';
        document.getElementById("b1").classList.add('activeButton');
        document.getElementById("b2").classList.remove('activeButton');
        break;
      default:
        document.getElementById("buttonBlock").style.display = 'none';
    }
    
  })
});
