
# JS-powered interactive field for shortcut-drilling using Anki for Windows and Linux

JS-script for [Anki](https://apps.ankiweb.net/), that allows creation of interactive field for catching
keys pressed on keyboard against a pre-setted shorcut.
Built using JQuery.

Inspired by a site [ShortcutFoo](https://shortcutfoo.com), this script allows you to build muscle memory for shorcuts by pressing them 
on keyboard while reviewing a note in Anki.

Works for Linux and Windows.  
Works for Mac only if user disables `⌥`(`alt` key)  modification on their system - full support for mac later.


![demonstration](https://user-images.githubusercontent.com/59960096/121014155-da4d9600-c7c3-11eb-8942-b7aa85adb927.mp4)



## Installation

### Easy way:

1) Download premade deck with VScode Windows shortcuts from `example_deck` and import it to your Anki.  

    There are two decks:  
    `vscode-win-online.apkg` - import this deck if you'll be reviewing notes on a PC that has constant internet-connection. JS-script in this deck
    is linked to the latest version of script in this GitHub repo. This will guarantee that you'll be using the latest version of the script.  
    `vscode-win-offline.apkg` - download this deck if you don't want the script to depend on internet connection. It will have latest version of the script
    at the time of download.

2) After import it will create new note type `Shortcuts` with two fields: `Action` for text-description of shortcut and `ShortCut` where you need to write shortcut itself.  
Just use this note type to create your own decks with shortcuts you need.

### Slightly harder way:

1) Create new note type in the Anki browser with two fields - `Action` and `ShortCut`.  
2) Copy templates for front and back from [this HTML file](note_front_and_back_template.html). There are two templates for the front side - choose one depending on if
3) you want it to work offline or not (read above in the `Easy way` for more info on what's different about templates.)  
Copy CSS stylings from [this CSS file](note_styling.css).

