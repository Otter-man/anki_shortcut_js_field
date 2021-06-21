
# JS-powered interactive field for shortcut-drilling using Anki for Windows and Linux

JS-script for [Anki](https://apps.ankiweb.net/), that allows the creation of an interactive field for catching
keys pressed on the keyboard against a pre-set shortcut.
Built using JQuery.

Inspired by a site [ShortcutFoo](https://shortcutfoo.com), this script allows you to build muscle memory for shortcuts by pressing them 
on the keyboard while reviewing a note in Anki.

Works on Windows, Linux and MacOS with standard QWERTY english layout.  


https://user-images.githubusercontent.com/59960096/121016486-619c0900-c7c6-11eb-877d-e810dbc6ef14.mp4

# Table of Contents

* [JS-powered interactive field for shortcut-drilling using Anki for Windows and Linux](#js-powered-interactive-field-for-shortcut-drilling-using-anki-for-windows-and-linux)
* [Table of Contents](#table-of-contents)
   * [Installation](#installation)  
         * [Easy way](#easy-way)  
         * [Slightly harder way](#slightly-harder-way)  
   * [Adding your shortcuts: formatting and key names.](#adding-your-shortcuts-formatting-and-key-names)  
         * [Formatting](#formatting)  
         * [Special keys names](#special-keys-names)  
         * [Other keys names](#other-keys-names)  
   * [Things that don't work.](#things-that-dont-work)


## Installation

#### Easy way:

1) Download on if the two premade decks with VScode Windows shortcuts from [example_deck folder](/example_deck) and import it to your Anki.  

    `vscode-win-online.apkg` - import this deck if you'll be reviewing notes on a PC that has a constant internet connection. JS-script in this deck is linked to the latest version of the script in this GitHub repo. This will guarantee that you'll be using the latest version of the script.  
    `vscode-win-offline.apkg` - download this deck if you don't want the script to depend on an internet connection. It will have the latest version of the script at the time of download.

2) After import it will create a new note type `Shortcuts` with two fields: `Action` for text-description of shortcut and `ShortCut` where you need to write shortcut itself.  
Just use this note type to create your decks with the shortcuts you need.

#### Slightly harder way:

1) Create a new note type in the Anki browser with two fields - `Action` and `ShortCut`.  
2) Copy templates for front and back from [this HTML file](note_front_and_back_template.html). There are two templates for the front side - choose one depending on if
you want it to work offline or not (read above in the `Easy way` for more info on what's different about templates.)  
3) Copy CSS stylings from [this CSS file](note_styling.css).


## Adding your shortcuts: formatting and key names.

### Formatting:
All keys should be either written with '+" or ' '(space) between them.  

Examples:  

* `Shift+Control+P`  
* `Control+K F12`  
* `Shift+Control+Alt+ArrowUp`  
* `cmd+Alt++` (this is a shortcut with three buttons `cmd`, `Alt` and `+`)  
* `Control+K Control+0`

### Special keys names:

All keys are independent of the register, so `Alt` can be written as `ALT`, `Alt` or `alt`.  
* `Alt` should be `Alt`.  
* `Shift` should be `Shift`.  
* `Enter`should be `Enter`.  
* `Space` should be `Space`.  
* `Control` should always be `Control`, never use `ctrl`.  
* `Backspace`, `PageUp`, `Delete`, and so on should be named as their full names without spaces.
* `Meta` key (this is `Win` key on windows, `cmd` key on mac) should be written as `cmd` or `Meta`.  
* Arrow keys should be written like this `ArrowUp`, `ArrowDown`, `ArrowLeft`, and `ArrowRight`.

### Other keys names:
Other keys should be set as they are typed. 

You can look up examples in pre-made decks for VScode in [example_deck folder](/example_deck)

## Things that don't work.
* Cards don't auto-flip if you correctly or incorrectly press shortcut, you just see the shortcut in green or red.  
You'll still need to flip the card by pressing enter (or space) and then choosing answer option.

* I couldn't find a way in JS to reliably prevent hotkeys from triggering actions in OS or other soft, so some combinations of keys don't work:
  1) Shortcuts in Windows with the `Win` button.
  2) Shortcuts with `⌥`(`alt` key) on Mac, unless the user disables it on system level.
  3) Shortcuts that are in the user's other installed soft unless the user disables it in the soft itself (like Nvidia Overlay and other software that catches shortcuts anywhere in the system).  
  4) Shortcuts that conflict with Anki shortcuts. The workaround is simple: install an addon [Customize Keyboard Shortcuts](https://ankiweb.net/shared/info/24411424) and disable conflicting shortcuts. In the [example_deck folder](/example_deck) I added config for the addon with every conflicting shortcut for my VScode deck disabled.
