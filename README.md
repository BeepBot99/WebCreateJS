# WebCreateJS
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/BeepBot99/WebCreateJS?color=skyblue&label=size&logo=github&logoColor=lightgreen&style=for-the-badge)  
---
Kind of like `React.js`.
A JavaScript library for building user interfaces.
But **MUCH** easier.
And it does the same things!

## How to use it  
>
  >
    >IMPORTANT: Include JavaScript in the head, with WebCreateJS **_BEFORE_** your JavaScript

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
        <td>Color Scheme for webpage. Accepts <code>"light"</code>, <code>"dark"</code>, and objects with <code>bgMain</code>, <code>bgOther</code>, <code>txtMain</code>, <code>txtOther</code>, <code>accent1</code>, <code>accent2</code>, <code>accent3</code>, <code>accent4</code>, <code>accent5</code>, <code>accent6</code>, <code>lnk</code>, <code>lnkHover</code>, <code>lnkActive</code>, and <code>lnkClicked</code> as css colors.</td>
        <td><code>WebCreateJS.init("light");</code></td>
      </tr>
    </tbody>
  </table>
</details>  


```javascript
window.addEventListener("DOMContentLoaded", () => {
  WebCreateJS.init("light");
});
```
