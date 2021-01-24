# WebCreateJS
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/BeepBot99/WebCreateJS?color=skyblue&label=size&logo=github&logoColor=lightgreen&style=for-the-badge)  
---
Kind of like `React.js`.
A JavaScript library for building user interfaces.
But **MUCH** easier.
And it does the same things!

## How to use it  

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

### WebCreateJS.add()  
To add something to the end of the webpage, use `WebCreateJS.add()`.  
Syntax:  
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
<td><code>elmt</code></td>
<td>What to add</td>
<td><code>WebCreateJS.add(&quot;header&quot;);</code></td>
</tr>
<tr>
<td><code>params</code></td>
<td>Data</td>
<td><code>WebCreateJS.add(&quot;header&quot;, { text: &quot;I am a header.&quot; });</code></td>
</tr>
</tbody>
</table>

### Headers
```javascript
window.addEventListener("DOMContentLoaded", () => {
  WebCreateJS.init("light");
  WebCreateJS.add("header", { text: "I am a header." });
});
```
### Articles
```
elmt: "article"
params: {
  title: "title",
  content: [
    {
      type: "text",
      content: "paragraph content"
    },
    {
      type: "image",
      source: "url.com/path/to-image",
      float: "right/left/default"
    }
  ]
}
```
```javascript
    WebCreateJS.add("article", {
        title: "I am an article.",
        content: [{
                type: "image",
                source: "https://th.bing.com/th/id/OIP.ZVH1cppOmnZlNe75vjgNagHaEI?pid=Api&rs=1",
                float: "right"
            },
            {
                type: "text",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie sem sit amet justo mollis maximus. Proin vitae euismod nisi. In accumsan odio vitae aliquam elementum. Sed volutpat metus mauris. Cras tortor nulla, malesuada ut pulvinar vel, fermentum ac metus. Sed ligula tellus, tempus in ornare eu, consectetur vel felis. Duis sollicitudin massa non ipsum iaculis ultrices. Aliquam vitae arcu ullamcorper, cursus lectus ac, auctor purus. Mauris aliquam convallis elementum.Integer venenatis vitae ex vel dignissim. Cras sit amet tortor eget odio cursus egestas vitae at sapien. Sed condimentum felis vitae nisl cursus vulputate. Mauris suscipit in dolor nec posuere. Donec vel efficitur mauris, vel euismod nisi. Sed ac ipsum congue, vulputate leo et, lobortis orci. Curabitur tortor urna, porttitor vel ligula eget, fringilla rhoncus lorem. Aenean eget iaculis neque.\nInteger venenatis vitae ex vel dignissim. Cras sit amet tortor eget odio cursus egestas vitae at sapien. Sed condimentum felis vitae nisl cursus vulputate. Mauris suscipit in dolor nec posuere. Donec vel efficitur mauris, vel euismod nisi. Sed ac ipsum congue, vulputate leo et, lobortis orci. Curabitur tortor urna, porttitor vel ligula eget, fringilla rhoncus lorem. Aenean eget iaculis neque. Nulla venenatis ante et mi sagittis, ut pretium lorem laoreet. Nulla facilisi. Suspendisse ultrices ac libero in dignissim. Vivamus a ligula imperdiet, facilisis ex at, pulvinar libero. Cras ultrices ante vitae porta suscipit.Hello There Again! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie sem sit amet justo mollis maximus. Proin vitae euismod nisi. In accumsan odio vitae aliquam elementum. Sed volutpat metus mauris. Cras tortor nulla, malesuada ut pulvinar vel, fermentum ac metus. Sed ligula tellus, tempus in ornare eu, consectetur vel felis. Duis sollicitudin massa non ipsum iaculis ultrices. Aliquam vitae arcu ullamcorper, cursus lectus ac, auctor purus. Mauris aliquam convallis elementum.Integer venenatis vitae ex vel dignissim. Cras sit amet tortor eget odio cursus egestas vitae at sapien. Sed condimentum felis vitae nisl cursus vulputate. Mauris suscipit in dolor nec posuere. Donec vel efficitur mauris, vel euismod nisi. Sed ac ipsum congue, vulputate leo et, lobortis orci. Curabitur tortor urna, porttitor vel ligula eget, fringilla rhoncus lorem. Aenean eget iaculis neque. Integer venenatis vitae ex vel dignissim. Cras sit amet tortor eget odio cursus egestas vitae at sapien. Sed condimentum felis vitae nisl cursus vulputate. Mauris suscipit in dolor nec posuere. Donec vel efficitur mauris, vel euismod nisi. Sed ac ipsum congue, vulputate leo et, lobortis orci. Curabitur tortor urna, porttitor vel ligula eget, fringilla rhoncus lorem. Aenean eget iaculis neque. Nulla venenatis ante et mi sagittis, ut pretium lorem laoreet. Nulla facilisi. Suspendisse ultrices ac libero in dignissim. Vivamus a ligula imperdiet, facilisis ex at, pulvinar libero. Cras ultrices ante vitae porta suscipit."
            }
        ]
    });
    ```
