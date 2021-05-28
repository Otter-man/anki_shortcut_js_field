var keystrokes = [];
var correctShortcut = document.getElementById("shortcut").textContent;
var correctShortcutArr = correctShortcut.split('+').map(function (item) {
  return item.trim();
}).sort();
var correctShortcutStr = correctShortcutArr.toString().toLowerCase()

var keyboardEvent = document.createEvent('KeyboardEvent');
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';



if (window.SwitcherListener == undefined) {
  window.SwitcherListener = true
  $(document).keydown(function (event) {
    if (keystrokes.length < correctShortcutArr.length) {
      if (event.keyCode == 32) {
        keystrokes.push(event.code);
      }
      else {
        keystrokes.push(event.key);
      };
      event.preventDefault();
    }
    else if (keystrokes.length >= correctShortcutArr.length) {
      keystrokes = [];
      if (event.keyCode == 32) {
        keystrokes.push(event.code);
      }
      else {
        keystrokes.push(event.key);
      };
      event.preventDefault();
    }
    $('#pressed_key').html(keystrokes.join(" + "));
    document.getElementById("pressed_key").style.visibility = "visible";
    document.getElementById("pressed_key").style.color = "red";

    var keystrokes_sorted = keystrokes.slice().sort()

    if (keystrokes_sorted.toString().toLowerCase() == correctShortcutStr) {
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
        }, 1500);
      }
    }
  })
};