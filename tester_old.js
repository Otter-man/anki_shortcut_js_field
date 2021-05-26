var keystrokes = [];
var correct_shortcut = document.getElementById("shortcut").textContent;
if (window.SwitcherListener == undefined) {
  window.SwitcherListener = true
  $(document).keydown(function (event) {
    if (keystrokes.length < correct_shortcut.split(' + ').length) {
      keystrokes.push(event.key);
      event.preventDefault();
    }
    else if (keystrokes.length >= correct_shortcut.split(' + ').length) {
      keystrokes = [];
      keystrokes.push(event.key);
      event.preventDefault();
    }
    $('#pressed_key').html(keystrokes.join(" + "));
    document.getElementById("pressed_key").style.visibility = "visible";
    document.getElementById("pressed_key").style.color = "red";

    var keystrokes_sorted = keystrokes.slice().sort()
    if (keystrokes_sorted.toString().toLowerCase() == correct_shortcut.split(' + ').sort().toString().toLowerCase()) {
      $('#pressed_key').html(correct_shortcut);
      document.getElementById("pressed_key").style.color = "green";
      event.preventDefault();
    }
    else {
      document.getElementById("pressed_key").style.visibility = "visible";
      $('#pressed_key').html(keystrokes.join(" + "));
      document.getElementById("pressed_key").style.color = "red";
      event.preventDefault();
      if (keystrokes.length <= correct_shortcut.split(' + ').length && document.getElementById("pressed_key").style.color == "red") {
        setTimeout(() => {
          keystrokes = [];
          $('#pressed_key').html(keystrokes.join(" + "));
        }, 1500);
      }
    }
  })
};
