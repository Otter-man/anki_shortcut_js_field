
var keystrokes = [];
var keystrokesCode = [];
var correctShortcut = document.getElementById("shortcut").textContent;
var correctShortcutArr = correctShortcut.split(/(?:\+| )/).map(function (item) {
    return item.trim().toLowerCase();
}).sort();
var correctShortcutStr = correctShortcutArr.toString().toLowerCase()

// This var contains all the keys that are modified when you press shift together.
var doubleKeys = {
    'Backquote': ['~', '`'], 'Digit1': [1, '!'], 'Digit2': [2, '@'],
    'Digit3': [3, '#'], 'Digit4': [4, '$'], 'Digit5': [5, '%'], 'Digit6': [6, '^'],
    'Digit7': [7, "&"], 'Digit8': [8, '*'], 'Digit9': [9, '('], 'Digit0': [0, ')'],
    'Minus': ['-', '_'], 'Equal': ['=', '+'], 'Backslash': ['\\', '|'], 'BracketLeft': ['[', '{'],
    'BracketRight': [']', '}'], 'Quote': ["'", '"'], 'Semicolon': [';', ':'], 'Comma': [',', '<'],
    'Period': [".", '>'], 'Slash': ['/', '?']
};

if (window.SwitcherListener == undefined) {
    window.SwitcherListener = true
    $(document).keydown(function (event) {

        if (keystrokes.length < correctShortcutArr.length) {
            if (event.keyCode == 32) {
                event.preventDefault();
                keystrokes.push(event.code);
                keystrokesCode.push(event.code);
            }
            else {
                event.preventDefault();
                keystrokes.push(event.key);
                keystrokesCode.push(event.code);
            }
        }
        else if (keystrokes.length >= correctShortcutArr.length) {
            keystrokes.shift();
            keystrokesCode.shift();
            if (event.keyCode == 32) {
                event.preventDefault();
                keystrokes.push(event.code);
                keystrokesCode.push(event.code);
            }
            else {
                event.preventDefault();
                keystrokes.push(event.key);
                keystrokesCode.push(event.code);
            }
        }
        $('#pressed_key').html(keystrokes.join(" + "));
        document.getElementById("pressed_key").style.visibility = "visible";
        document.getElementById("pressed_key").style.color = "red";

        var keystrokesSorted = keystrokes.slice()
        var keystrokesSortedAlt1 = keystrokesSorted.slice()
        var keystrokesSortedAlt2 = keystrokesSorted.slice()

        for (i = 0; i < keystrokesCode.length; i++) {
            if (doubleKeys[keystrokesCode[i]] !== undefined) {
                keystrokesSortedAlt1[i] = doubleKeys[keystrokesCode[i]][0];
                keystrokesSortedAlt2[i] = doubleKeys[keystrokesCode[i]][1];
            }
        }

        keystrokesSorted = keystrokesSorted.map(function (item) {
            return item.trim().toLowerCase();
        }).sort();
        keystrokesSortedAlt1 = keystrokesSortedAlt1.sort().map(function (item) {
            return item.trim().toLowerCase();
        }).sort();
        keystrokesSortedAlt2 = keystrokesSortedAlt2.sort().map(function (item) {
            return item.trim().toLowerCase();
        }).sort();



        if (keystrokesSorted.toString().toLowerCase() == correctShortcutStr || keystrokesSortedAlt1.toString().toLowerCase() == correctShortcutStr || keystrokesSortedAlt2.toString().toLowerCase() == correctShortcutStr) {
            document.getElementById("pressed_key").style.visibility = "hidden";
            keystrokes = [];
            $('#pressed_key').html(keystrokes.join(" + "));
            $('#right_shortcut').html(correctShortcut);
            document.getElementById("right_shortcut").style.color = "green";
            event.preventDefault();
        }
        else {
            document.getElementById("pressed_key").style.visibility = "visible";
            $('#pressed_key').html(keystrokes.join(" + "));
            document.getElementById("pressed_key").style.color = "red";
            event.preventDefault();
            if (keystrokes.length <= correctShortcutArr.length && document.getElementById("pressed_key").style.color == "red") {
                setTimeout(() => {
                    keystrokes = [];
                    $('#pressed_key').html(keystrokes.join(" + "));
                }, 1000 * correctShortcutArr.length);
            }
        }
    })
};