(() => {
    AOS.init({
        duration: 700,
        once: true,
        offset: 80,
        easing: "ease-out-cubic"
    });

    const backToTop = document.getElementById("backToTop");
    const navContent = document.getElementById("navContent");
    const year = document.getElementById("currentYear");

    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.querySelectorAll("#navContent .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (navContent.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(navContent).hide();
            }
        });
    });

    year.textContent = new Date().getFullYear();
})();

