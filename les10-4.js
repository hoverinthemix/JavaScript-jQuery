$(document).ready(function() {
  // Klik op een miniatuur
  $("#thumbnails img").click(function() {
    const nieuweFoto = $(this).data("full");   // URL van grote versie
    const nieuweTekst = $(this).attr("title"); // Beschrijving uit title

    // Fade-out huidige grote foto
    $("#groteFoto").fadeOut(400, function() {
      // Zodra fade-out klaar is: vervang bron en tekst
      $("#groteFoto").attr("src", nieuweFoto).fadeIn(400);
      $("#beschrijving").text(nieuweTekst);
    });
  });
});