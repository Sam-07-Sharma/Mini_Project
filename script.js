document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const videos = document.querySelectorAll(".video");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            tabButtons.forEach(btn => {
                btn.classList.remove("active");
            });
            button.classList.add("active");

            videos.forEach(video => {
                if (category === "all" || video.classList.contains(category)) {
                    video.style.display = "block";
                } else {
                    video.style.display = "none";
                }
            });
        });
    });
});
