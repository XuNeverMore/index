var themeManager = {
  setBgColor: function (color) {
    document.body.style = `background-color:${color};`;
  },
  applyLinearBgColor: function () {
    let bgColorStart = document.querySelector("#bgcolor-start").value;
    let bgColorEnd = document.querySelector("#bgcolor-end").value;

    // console.log('colorStart:' + bgColorStart);
    // console.log('colorEnd:' + bgColorEnd);
    // console.log('body background:' + document.body.style.background);
    document.body.style.background = `linear-gradient(to right, ${bgColorStart}, ${bgColorEnd} )`;
    // document.body.style.background ='linear-gradient(to right, #ff0000, #00ff00)';
  },
  randomBgColor: function () {
    let colors = [
      "#4caf65",
      "#03657e",
      "#000000",
      "#2cd0f9",
      "#f92cc6",
      "#a3b109",
      "#b11109",
      "#0befba",
    ];
    let index = Math.floor(Math.random() * colors.length);
    let color = colors[index];
    document.body.style.backgroundColor = color;
    // ("background-color",color);
  },
  setTheme: () => {
    let switcher = document.querySelector("#themeSwitcher");
    function cacheTheme(isLight) {
      docCookies.setItem("theme", isLight ? "light" : "dark", 365);
    }
    function applyTheme(isLight) {
      if (!isLight) {
        switcher.classList.remove("fa-sun");
        switcher.classList.add("fa-moon");
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      } else {
        switcher.classList.remove("fa-moon");
        switcher.classList.add("fa-sun");
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      }
      cacheTheme(isLight);
    }
    let theme = docCookies.getItem("theme");
    applyTheme(theme === "light" || theme === null || theme === "");
    switcher.onclick = (ev) => {
      let isLight = switcher.classList.contains("fa-sun");
      console.log("themeSwitchClick", isLight);
      applyTheme(!isLight);
    };
  },
};
