var keystrokes = [];
var correct_shortcut = document.getElementById("shortcut")
$(window).keydown(function (event) {
    if (keystrokes.length < 3) {
        keystrokes.push(event.key);
        event.preventDefault();
    }
    else if (keystrokes.length == 3) {
        keystrokes = [];
        keystrokes.push(event.key);
        event.preventDefault();
    }
    if (keystrokes.sort() == correct_shortcut.split(' + ').sort()) {
        $('#pressed_key').html(correct_shortcut);
        document.getElementById("pressed_key").style.visibility = "visible";
        document.getElementById("pressed_key").style.color = "green";
        event.preventDefault();
    }
    else {
        document.getElementById("pressed_key").style.visibility = "visible";
        $('#pressed_key').html(keystrokes.join(" + "));
        document.getElementById("pressed_key").style.color = "red";
        event.preventDefault();
    }
});

