function setIframe() {
    var selection = document.getElementById("fig_select").value;
    document.getElementById("figure-display").src = selection
}
function setSeifa() {
  var selection = document.getElementById("seifa_select").value;
  document.getElementById("figure-display").src = selection
}
function setRemote() {
  var selection = document.getElementById("remote_select").value;
  document.getElementById("figure-display").src = selection
}
function setRegions() {
  var selection = document.getElementById("regions_select").value;
  document.getElementById("figure-display").src = selection
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
      case "seifa_number.html":
        $("#seifa-dropdown").show();
        $("#remote-dropdown").hide();
        $("#regions-dropdown").hide();
        break;
      case "remote_number.html":
        $("#remote-dropdown").show();
        $("#seifa-dropdown").hide();
        $("#regions-dropdown").hide();
        break;
      case "regions_number.html":
        $("#remote-dropdown").hide();
        $("#seifa-dropdown").hide();
        $("#regions-dropdown").show();
        break;
      default:
        $("#remote-dropdown").hide();
        $("#seifa-dropdown").hide();
        $("#regions-dropdown").hide();
    }
    
  })
})



