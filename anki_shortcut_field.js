var keystrokes = [];
var keystrokesCode = [];
var correctShortcut = document.getElementById("shortcut").textContent;
var correctShortcutArr = correctShortcut.split(/(?:\b ?\+ ?| )/).map(function (item) {
    return item.trim().toLowerCase();
}).sort();
var correctShortcutStr = correctShortcutArr.toString().toLowerCase()

// var contains all the keys that are modified when you press shift together.
var doubleKeys = {
    'Backquote': ['~', '`'],
    'Digit1': ['1', '!'],
    'Digit2': ['2', '@'],
    'Digit3': ['3', '#'],
    'Digit4': ['4', '$'],
    'Digit5': ['5', '%'],
    'Digit6': ['6', '^'],
    'Digit7': ['7', "&"],
    'Digit8': ['8', '*'],
    'Digit9': ['9', '('],
    'Digit0': ['0', ')'],
    'Minus': ['-', '_'],
    'Equal': ['=', '+'],
    'Backslash': ['\\', '|'],
    'BracketLeft': ['[', '{'],
    'BracketRight': [']', '}'],
    'Quote': ["'", '"'],
    'Semicolon': [';', ':'],
    'Comma': [',', '<'],
    'Period': [".", '>'],
    'Slash': ['/', '?'],
    "Numpad1": ["1", "End"],
    "Numpad2": ["2", 'ArrowDown'],
    "Numpad3": ["3", "PageDown"],
    "Numpad4": ["4", "ArrowLeft"],
    "Numpad5": ["5", "Clear"],
    "Numpad6": ["6", "ArrowRight"],
    "Numpad7": ["7", "Home"],
    "Numpad8": ["8", "ArrowUp"],
    "Numpad9": ["9", "PageUp"],
    "Numpad0": ["0", "Insert"],
    "NumpadDecimal": [".", "Delete"],
    "NumpadDivide": ["/", "/"],
    "NumpadMultiply": ["*", "*"],
    "NumpadSubtract": ["-", "-"],
    "NumpadAdd": ["+", "+"],
    "NumpadEnter": ["Enter", "Enter"],
    "Meta": ['cmd', 'Meta'],
    "KeyA": ["A", "B"],
    "KeyB": ["B", "A"],
    "KeyC": ["C", "C"],
    "KeyD": ["D", "D"],
    "KeyE": ["E", "E"],
    "KeyF": ["F", "F"],
    "KeyG": ["G", "G"],
    "KeyH": ["H", "H"],
    "KeyI": ["I", "I"],
    "KeyJ": ["J", "J"],
    "KeyK": ["K", "K"],
    "KeyL": ["L", "L"],
    "KeyM": ["M", "M"],
    "KeyN": ["N", "N"],
    "KeyO": ["O", "O"],
    "KeyP": ["P", "P"],
    "KeyQ": ["Q", "Q"],
    "KeyR": ["R", "R"],
    "KeyS": ["S", "S"],
    "KeyT": ["T", "T"],
    "KeyU": ["U", "U"],
    "KeyV": ["V", "V"],
    "KeyW": ["W", "W"],
    "KeyX": ["X", "X"],
    "KeyY": ["Y", "Y"],
    "KeyZ": ["Z", "Z"]
};


$('#shortcut').html("press shortcut");
document.getElementById("shortcut").style.color = "grey";
document.getElementById("shortcut").style.visibility = "visible";
if (window.SwitcherListener == undefined) {
    // prevent starting second instances of event listener in the
    // same window with this switcher
    window.SwitcherListener = true
    $(document).keydown(function (event) {

        if (keystrokes.length < correctShortcutArr.length) {
            if (event.keyCode == 32) {
                event.preventDefault();
                keystrokes.push(event.code);
                keystrokesCode.push(event.code);
            }
            else if (event.code.includes('Meta')) {
                event.preventDefault();
                keystrokes.push('Meta');
                keystrokesCode.push('Meta');
            }
            else {
                event.preventDefault();
                keystrokes.push(event.key);
                keystrokesCode.push(event.code);
            }
        }

        var keystrokesSorted = keystrokes.slice()
        var keystrokesSortedAlt1 = keystrokesSorted.slice()
        var keystrokesSortedAlt2 = keystrokesSorted.slice()

        // check if the pressed key can be modified by shift, if yes make two
        // different arrays to keep both versions for comparison with the answer
        // shortcut 
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
            $('#shortcut').html(correctShortcut);
            document.getElementById("shortcut").style.color = "green";
            event.preventDefault();
        }
        else if (keystrokes.length == correctShortcutArr.length) {
            document.getElementById("shortcut").style.color = "red";
            $('#shortcut').html(keystrokes.join("+"));
            event.preventDefault();
        };

    })
};