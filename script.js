document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".svg-button");
    var counters = document.querySelectorAll(".counter");

    buttons.forEach(function (button, index) {
        var svgIcon = button.querySelector("svg");
        var path = svgIcon.querySelector("path");

        var counter = counters[index];

        var initialCounterValue = parseInt(counter.textContent);
        counter.textContent = initialCounterValue;

        button.addEventListener("click", function () {
            if (path.getAttribute("fill") !== "red") {
                path.setAttribute("fill", "red");
                counter.textContent = parseInt(counter.textContent) + 1;
                counter.style.color = "red";
            } else {
                path.setAttribute("fill", "#6C757D");
                counter.textContent = parseInt(counter.textContent) - 1;
                if (parseInt(counter.textContent) >= 0) {
                    counter.style.color = "";
                }
            }
        });
    });
});