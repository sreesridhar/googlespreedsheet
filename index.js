var form = document.getElementById("sheetdb-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("submitBtn").disabled = true;
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      document.getElementById("submitBtn").disabled = false;
      window.open("thanks.html", "_blank");
    });
});
