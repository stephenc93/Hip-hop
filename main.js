function openNav() {
    document.getElementById("navbar").style.visibility = "visible";
  // $("#main-doc").innerWidth( "width", "-=300px"); 
}

function closeNav() {
    document.getElementById("navbar").style.visibility = "hidden";
}

$(".closeBtn").on("click", function() {
  closeNav();
});

$("#threeLines").on("click", function() {
  openNav();
});