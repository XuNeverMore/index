let netConfig = configs.websites;
window.addEventListener("load", (event) => {
  logScreenInfo();
  const content = document.querySelector("#content");
  netConfig.forEach(function (value) {
    // console.log(value.net)
    // console.log(value.link)
    let nodeItem = document.createElement("li");
    nodeItem.className = "item";
    nodeItem.innerHTML = `<a href=${value.link} target=${value.link}>
                        <div>
                            <div class='img_container'>
                                <img src=${value.icon}>
                            </div>
                            <span class='item_span'>${value.net}</span>
                        </div>
                    </a>`;
    content.append(nodeItem);
  });
  //body click
  let drawer = document.querySelector(".drawer-settings");
  document.querySelector(".main").addEventListener("click", () => {
    let isOpen = drawerManager.isDrawerOpen();
    if (isOpen) {
      drawerManager.closeDrawer();
    }
  });
  // engines.setBingEngine();
  //init bg color
  let bgColorStart = docCookies.getItem("bgColorStart");
  let bgColorEnd = docCookies.getItem("bgColorEnd");
  console.log("start:" + bgColorStart + ",end:" + bgColorEnd);
  document.querySelector("#bgcolor-start").value =
    bgColorStart == null ? "#1E4B73" : bgColorStart;
  document.querySelector("#bgcolor-end").value =
    bgColorEnd == null ? "#FFFFFF" : bgColorEnd;
  themeManager.applyLinearBgColor();
});

function getCurrentTime() {
  var date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  // return date.format("yyyyMMdd")
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var sec = date.getSeconds();
  // +hour+":"+minute+":"+sec
  return "" + year + "年" + month + "月" + day + "日 ";
}
var onHeaderClicked = function () {
  let state = drawerManager.toggle();
  event.stopPropagation();
  console.log("=========clicked mainLogo");
};
drawerManager.onDrawerClosed = () => {
  console.log("onDrawerClosed");
  themeManager.applyLinearBgColor();
};
var onClickEmpty = () => {
  event.stopPropagation();
};
var keys = docCookies.keys();
for (var n = 0; n < keys.length; n++) {
  console.log(docCookies.getItem(keys[n]));
}
var hasConfig = docCookies.hasItem("net_config");
if (!hasConfig) {
  // docCookies.setItem()
  console.log("no config!!!");
  docCookies.setItem("net_config", "xuchuanting_config");
}
function onBgColorStartChange(color) {
  console.log("on color start change:" + color);
  docCookies.setItem("bgColorStart", color, Infinity);
}
function onBgColorEndChange(color) {
  console.log("on color end change:" + color);
  docCookies.setItem("bgColorEnd", color, Infinity);
}
function search() {
  let edt = document.querySelector("#edt-search");
  let content = edt.content;
  console.log("========edt content:" + content);
}
function onEngineChanged(engineName) {
  console.log("engine===" + engineName);
  engines.setEngine(engineName);
}
function showSelect() {
  var sel = document.querySelector("#select-engine");
  sel.onclick();
}

function logScreenInfo() {
  let screenHeight = screen.height;
  let screenWidth = screen.width;
  let info = `screen size:${screenWidth}x${screenHeight}`;
  console.log(info);
  document.querySelector("#sp-info").innerHTML = info;
}
