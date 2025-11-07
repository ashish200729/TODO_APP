# TODO App

Simple, lightweight To-Do list web app.

## Features
- Add tasks (click "Add" or press Enter).
- Mark tasks complete (toggle strike-through).
- Remove tasks.
- Limits to 5 tasks.

## Files
- [index.html](index.html) — app markup.
- [styles.css](styles.css) — app styling.
- [script.js](script.js) — app logic: see [`createLi`](script.js), [`addTask`](script.js), [`li_list`](script.js).

## Quick Start
1. Open [index.html](index.html) in your browser (or serve via Live Server).
2. Type a task in the input and:
   - Click "Add" (calls [`addTask`](script.js)), or
   - Press Enter (handled in [script.js](script.js) keydown listener).
3. Click a list item to toggle complete.  
4. Click the × icon to remove a task.

## Behavior details
- New list items are created with [`createLi`](script.js).  
- The app prevents adding more than 5 tasks (uses [`li_list`](script.js) length check).

## Development
- Edit styles in [styles.css](styles.css).
- Edit behavior in [script.js](script.js).
