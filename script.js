const mainNav = document.getElementById("mainNav");

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const drawer = bootstrap.Offcanvas.getInstance(mainNav);
    if (drawer) {
      drawer.hide();
    }
  });
});
