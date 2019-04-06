# cursor-jump, vs-code extension

Jump eg. 7 lines up/down with alt+up/down (fast navigation, customizable)

## Features

- exposes `extension.cursor-jump` which takes arg `{deltaLine: number, deltaChar: number, moveAnchor: bool, moveActive: bool}` (moveAnchor/Active is true by default, ie. will move the whole selection)
- set custom key-bindings, eg.:

  ```json
  {
    "command": "extension.cursor-jump",
    "when": "editorTextFocus",
    "key": "alt+up",
    "args": {"lineDelta": -7, "charDelta": 0}
  }
  ```

- works on multiple selections
- ability to only move end point / "active" by setting `moveAnchor: false`, useful when doing eg. `shift-alt-up`

## Requirements

None. Appart from [vscode-extension-starter-guide](https://code.visualstudio.com/api/get-started/your-first-extension), this extension is like 10 lines of code.

## Extension Settings

Setup in user keybindings by doing `cmd+shit+P`, `open keyboard shortcuts`, and editing to your desire as above.

## Known Issues

None.

## Release Notes

### 0.0.1

Initial release.

## Contributing

- `git clone ...`
- `npm i`
- `code .`
- `F5` to open "Extension Development Host" window
- `cmd+n`, write some text, and try `alt+up`
- go back and edit the file, optionally view "Debug Console", save and hit reload on the debug toolbar
- when ready, git commit, push to fork, and make a Pull Request

---

Created by Leonard Pauli, 6 apr 2019

**Enjoy!**
