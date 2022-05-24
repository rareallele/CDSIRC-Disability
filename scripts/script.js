function setIframe() {
    var selection = document.getElementById("fig_select").value;
    document.getElementById("figure-display").src = selection
}

function setIframeStatistic(option) {
  var selection = option.value;
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
      case "Figures/remote_number.html":
        document.getElementById('statistic_dropdown').style.display = 'block';
        document.getElementById('numberofdeaths').value = "Figures/remote_number.html";
        document.getElementById('deathrate').value = "Figures/remote_rate.html";
        document.getElementById('statistic_select').value = "Figures/remote_number.html";
        break;
      case "Figures/regions_number.html":
        document.getElementById('statistic_dropdown').style.display = 'block';
        document.getElementById('numberofdeaths').value = "Figures/regions_number.html";
        document.getElementById('deathrate').value = "Figures/regions_rate.html";
        document.getElementById('statistic_select').value = "Figures/regions_number.html";
        break;
    }
    
  })
});
