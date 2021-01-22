# WebCreateJS
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/BeepBot99/WebCreateJS?color=skyblue&label=size&logo=github&logoColor=lightgreen&style=for-the-badge)  
---
>Kind of like `React.js`.
A JavaScript library for building user interfaces.
But **MUCH** easier.
And it does the same things!

## How to use it  
---
### Getting set up
Always start with this:
```javascript
window.addEventListener("DOMContentLoaded", () => {
  // Code here
});
```
You can also use `onload`:
```javascript
window.onload = () => {
  // Code here
};
```
The first thing you do is always `WebCreateJS.init()`.
<details>
  <summary>Show Syntax</summary>
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>colorScheme</td>
        <td>Color Scheme for webpage. Accepts <code>"light"</code>, <code>"dark"</code>, and objects with `bgMain`, `bgOther`, `txtMain`, `txtOther`, `accent1`, `accent2`, `accent3`, `accent4`, `accent5`, `accent6`, `lnk`, `lnkHover`, `lnkActive`, and `lnkClicked` as css colors.</td>
        <td><code>WebCreateJS.init("light");</code></td>
      </tr>
    </tbody>
  </table>
</details>
