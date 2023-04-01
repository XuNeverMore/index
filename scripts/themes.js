var themeManager = {
    setBgColor: function (color) {
        document.body.style = `background-color:${color};`;
    },
    randomBgColor: function () {
        let colors =
            [
                "#4caf65",
                "#03657e",
                "#000000",
                "#2cd0f9",
                "#f92cc6",
                "#a3b109",
                "#b11109",
                "#0befba"
            ];
        let index = Math.floor(Math.random()*colors.length);
        let color = colors[index];
        document.body.style.backgroundColor=color;
        // ("background-color",color);
    }

}