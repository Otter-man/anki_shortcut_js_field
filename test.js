var keystrokes = ['Control', 'ArrowUp']
var correct_shortcut = 'Control + ArrowUp'

console.log(keystrokes.join(' + '))

console.log(correct_shortcut.split(' + ').sort())

var setKeystrokes = new Set(keystrokes);
var setCorrectShortcuts = new Set(correct_shortcut.split(' + '));

console.log(setKeystrokes == setCorrectShortcuts)
