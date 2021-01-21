const WebCreateJS = {
    colors: {},
    init: function(colorScheme) {
        const css = document.createElement("style");
        document.head.appendChild(css);
        if (typeof colorScheme === "string") {
            switch (colorScheme) {
                case "light":
                    this.colors.bgMain = "#E7E6E6";
                    this.colors.bgOther = "#adadad";
                    this.colors.txtMain = "black";
                    this.colors.txtOther = "#212121";
                    this.colors.accent1 = "blue";
                    this.colors.accent2 = "orange";
                    this.colors.accent3 = "lightgray";
                    this.colors.accent4 = "yellow";
                    this.colors.accent5 = "skyblue";
                    this.colors.accent6 = "#4CBB17";
                    this.colors.lnk = "#00c";
                    this.colors.lnkHover = "#00008a";
                    this.colors.lnkActive = "#000036";
                    this.colors.lnkClicked = "#b37400";
                    break;
                case "dark":
                    this.colors.bgMain = "#212121";
                    this.colors.bgOther = "black";
                    this.colors.txtMain = "#adadad";
                    this.colors.txtOther = "white";
                    this.colors.accent1 = "whitesmoke";
                    this.colors.accent2 = "#949494";
                    this.colors.accent3 = "#666666";
                    this.colors.accent4 = "white";
                    this.colors.accent5 = "#3b3b3b";
                    this.colors.accent6 = "#adadad";
                    this.colors.lnk = "#adadad";
                    this.colors.lnkHover = "whitesmoke";
                    this.colors.lnkActive = "white";
                    this.colors.lnkClicked = "darkgray";
                    break;
                default:
                    console.error("WebCreateJS.init()", "type: string", "unkown color scheme.", "color schemes:", "light, dark");
                    break;
            }
        } else if (typeof colorScheme === "object") {
            if (colorScheme.bgMain && colorScheme.bgOther && colorScheme.txtMain && colorScheme.txtOther && colorScheme.accent1 && colorScheme.accent2 && colorScheme.accent3 && colorScheme.accent4 && colorScheme.accent5 && colorScheme.accent6 && colorScheme.lnk && colorScheme.lnkHover && colorScheme.lnkActive && colorScheme.lnkClicked) {
                this.colors.bgMain = colorScheme.bgMain;
                this.colors.bgOther = colorScheme.bgOther;
                this.colors.txtMain = colorScheme.txtMain;
                this.colors.txtOther = colorScheme.txtOther;
                this.colors.accent1 = colorScheme.accent1;
                this.colors.accent2 = colorScheme.accent2;
                this.colors.accent3 = colorScheme.accent3;
                this.colors.accent4 = colorScheme.accent4;
                this.colors.accent5 = colorScheme.accent5;
                this.colors.accent6 = colorScheme.accent6;
                this.colors.lnk = colorScheme.lnk;
                this.colors.lnkHover = colorScheme.lnkHover;
                this.colors.lnkActive = colorScheme.lnkActive;
                this.colors.lnkClicked = colorScheme.lnkClicked;
            } else {
                console.error("WebCreateJS.init()", "type: object", "did not include every color on color scheme", "must include:", "bgMain, bgOther, txtMain, txtOther, accent1, accent2, accent3, accent4, accent5, accent6, lnk, lnkHover, lnkActive, lnkClicked");
            }
        } else {
            console.error("WebCreateJS.init()", "type: " + typeof colorScheme, "type not accepted", "types:", "string, object");
        }
        let cssCode = "";
        cssCode += ":root{";
        cssCode += `--bgMain:${this.colors.bgMain};--bgOther:${this.colors.bgOther};--txtMain:${this.colors.txtMain};--txtOther:${this.colors.txtOther};--acent1:${this.colors.accent1};--acent2:${this.colors.accent2};--acent3:${this.colors.accent3};--acent4:${this.colors.accent4};--acent5:${this.colors.accent5};--acent6:${this.colors.accent6};--lnk:${this.colors.lnk};--lnkHover:${this.colors.lnkHover};--lnkActive:${this.colors.lnkActive};--lnkCliked:${this.colors.lnkClicked};`;
        cssCode += "}";
        cssCode += "body{";
        cssCode += `background-color:var(--bgMain);color:var(--txtMain);`;
        cssCode += "}";
        cssCode += "a:link{";
        cssCode += "color:var(--lnk);";
        cssCode += "}";
        cssCode += "a:hover{";
        cssCode += "color:var(--lnkHover);";
        cssCode += "}";
        cssCode += "a:active{";
        cssCode += "color:var(--lnkActive);";
        cssCode += "}";
        cssCode += "a:visited{";
        cssCode += "color:var(--lnkClicked);";
        cssCode += "}";
        cssCode += ".otherColors{";
        cssCode += "background-color:var(--bgOther);color:var(--txtOther);";
        cssCode += "}";
        css.innerHTML = cssCode;
    },
    add: function(elmt, params) {
        switch (elmt) {
            case "h1":
                const c92w46 = document.createElement("h1");
                const u7s9de = document.createElement("hr");
                c92w46.innerText = params.text;
                document.body.appendChild(c92w46);
                document.body.appendChild(u7s9de);
                break;
            case "article":
                const gn1r8d = document.createElement("h2");
                gn1r8d.innerText = params.title;
                const s8xt1f = params.content;
                for (let t65xuz = 0; t65xuz < c92w46.length; t65xuz++) {

                }
                break;
        }
    }
};
