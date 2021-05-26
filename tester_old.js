
var keystrokes = [];
var correctShortcut = document.getElementById("shortcut").textContent;
if (window.SwitcherListener == undefined) {
  window.SwitcherListener = true
  $(document).keydown(function (event) {
    if (keystrokes.length < correctShortcut.split(' + ').length) {
      keystrokes.push(event.key);
      event.preventDefault();
    }
    else if (keystrokes.length >= correctShortcut.split(' + ').length) {
      keystrokes = [];
      keystrokes.push(event.key);
      event.preventDefault();
    }
    $('#pressed_key').html(keystrokes.join(" + "));
    document.getElementById("pressed_key").style.visibility = "visible";
    document.getElementById("pressed_key").style.color = "red";

    var keystrokes_sorted = keystrokes.slice().sort()
    if (keystrokes_sorted.toString().toLowerCase() == correctShortcut.split(' + ').sort().toString().toLowerCase()) {
      $('#pressed_key').html(correctShortcut);
      document.getElementById("pressed_key").style.color = "green";
      event.preventDefault();
    }
    else {
      document.getElementById("pressed_key").style.visibility = "visible";
      $('#pressed_key').html(keystrokes.join(" + "));
      document.getElementById("pressed_key").style.color = "red";
      event.preventDefault();
      if (keystrokes.length <= correctShortcut.split(' + ').length && document.getElementById("pressed_key").style.color == "red") {
        setTimeout(() => {
          keystrokes = [];
          $('#pressed_key').html(keystrokes.join(" + "));
        }, 1500);
      }
    }
  })
};
