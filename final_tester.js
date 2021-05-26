
var keystrokes = [];
var correctShortcut = document.getElementById("shortcut").textContent;
var correctShortcutArr = correctShortcut.split('+').map(function (item) {
    return item.trim();
});
correctShortcutArr = correctShortcutArr.sort()
var correctShortcutStr = correctShortcut.toString().toLowerCase()


if (window.SwitcherListener == undefined) {
    window.SwitcherListener = true
    $(document).keydown(function (event) {
        if (keystrokes.length < correctShortcutArr.length) {
            keystrokes.push(event.key);
            event.preventDefault();
        }
        else if (keystrokes.length >= correctShortcutArr.length) {
            keystrokes = [];
            keystrokes.push(event.key);
            event.preventDefault();
        }
        $('#pressed_key').html(keystrokes.join(" + "));
        document.getElementById("pressed_key").style.visibility = "visible";
        document.getElementById("pressed_key").style.color = "red";

        var keystrokes_sorted = keystrokes.slice().sort()

        if (keystrokes_sorted.toString().toLowerCase() == correctShortcutStr) {
            $('#pressed_key').html(correctShortcut);
            document.getElementById("pressed_key").style.color = "green";
            event.preventDefault();
        }
        else {
            document.getElementById("pressed_key").style.visibility = "visible";
            $('#pressed_key').html(keystrokes.join(" + "));
            document.getElementById("pressed_key").style.color = "red";
            event.preventDefault();
            if (keystrokes.length <= correctShortcutArr.length && document.getElementById("pressed_key").style.color == "red") {
                setTimeout(() => {
                    $('#pressed_key').html(keystrokes.join(" + "));
                }, 1500);
                if (document.getElementById("pressed_key").style.color == "red") {
                    keystrokes = [];
                }
            }
        }
    })
};
