var themeManager = {
    setBgColor: function (color) {
        document.body.style = `background-color:${color};`;
    },
    applyLinearBgColor: function () {
        let bgColorStart = document.querySelector("#bgcolor-start").value;
        let bgColorEnd = document.querySelector("#bgcolor-end").value;

        console.log('colorStart:' + bgColorStart);
        console.log('colorEnd:' + bgColorEnd);
        console.log('body background:' + document.body.style.background);
        document.body.style.background = `linear-gradient(to right, ${bgColorStart}, ${bgColorEnd} )`;
        // document.body.style.background ='linear-gradient(to right, #ff0000, #00ff00)';
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
        let index = Math.floor(Math.random() * colors.length);
        let color = colors[index];
        document.body.style.backgroundColor = color;
        // ("background-color",color);
    }

}