
var keystrokes = [];
var correct_shortcut = document.getElementById("shortcut").textContent;
$(window).keydown(function (event) {
  if (keystrokes.length < correct_shortcut.split(' + ').length) {
    keystrokes.push(event.key);
    event.preventDefault();
  }
  else if (keystrokes.length >= correct_shortcut.split(' + ').length) {
    keystrokes = [];
    keystrokes.push(event.key);
    event.preventDefault();
  }
  setTimeout(() => {
    keystrokes = [];
  }, 3000)

  $('#pressed_key').html(keystrokes.join(" + "));
  document.getElementById("pressed_key").style.visibility = "visible";
  document.getElementById("pressed_key").style.color = "red";
  event.preventDefault();
  if (keystrokes_sorted.toString() == correct_shortcut.split(' + ').sort().toString()) {
    $('#pressed_key').html(correct_shortcut);
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
