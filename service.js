document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Function to handle the button visibility and position
    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Show or hide the button based on scroll position
        if (scrollY > windowHeight) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Smoothly scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    });
});
