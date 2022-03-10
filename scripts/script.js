function setIframe() {
    var selection = document.getElementById("fig_select").value;
    document.getElementById("figure-display").src = selection
}

function setIframeStatistic() {
  var selection = document.getElementById("statistic_select").value;
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
        document.getElementById('statistic_dropdown').style.display = 'block';
        document.getElementById('numberofdeaths').value = "seifa_number.html";
        document.getElementById('deathrate').value = "seifa_rate.html";
        document.getElementById('statistic_select').value = "seifa_number.html";
        break;
      case "remote_number.html":
        document.getElementById('statistic_dropdown').style.display = 'block';
        document.getElementById('numberofdeaths').value = "remote_number.html";
        document.getElementById('deathrate').value = "remote_rate.html";
        document.getElementById('statistic_select').value = "remote_number.html";
        break;
      case "regions_number.html":
        document.getElementById('statistic_dropdown').style.display = 'block';
        document.getElementById('numberofdeaths').value = "regions_number.html";
        document.getElementById('deathrate').value = "regions_rate.html";
        document.getElementById('statistic_select').value = "regions_number.html";
        break;
      default:
        document.getElementById('statistic_dropdown').style.display = 'none';
    }
    
  })
})



