// Cached elements
const $creature = $("#creature");
const $status = $("#status");
const $thought = $("#thought");
const $scene = $("#scene");

let following = false;
const offset = 30;

// Helper function to update status text
function updateStatus(message) {
    $status.text(message);
}

// Click: transform creature
$creature.click(function () {
    $(this).toggleClass("transformed");
    updateStatus("The creature changed shape.");
});

// Hover: show and hide thought bubble
$creature.hover(
    function () {
        $thought.stop(true, true).slideDown(300);
        updateStatus("The creature revealed a thought.");
    },
    function () {
        $thought.stop(true, true).slideUp(300);
        updateStatus("The thought disappeared.");
    }
);

// Spacebar: toggle following behavior
$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();

        following = !following;
        $creature.toggleClass("following");

        if (following) {
            updateStatus("The creature is following your cursor.");
        } else {
            updateStatus("The creature stopped following you.");
        }
    }
});

// Mouse movement: move creature if following
$(document).mousemove(function (event) {
    if (following) {
        $creature.css({
            left: event.pageX - $scene.offset().left + offset,
            top: event.pageY - $scene.offset().top + offset
        });
    }
});