var drawerManager = {
  onDrawerClosed: () => {},
  openDrawer: function () {
    let drawer = document.querySelector(".drawer-settings");
    drawer.style.width = `${drawer.parentElement.clientWidth * 0.2}px`;
  },
  closeDrawer: function () {
    let drawer = document.querySelector(".drawer-settings");
    drawer.style.width = "0px";
    console.log("closeDrawer invoked");
    this.onDrawerClosed();
  },
  isDrawerOpen: () => {
    let width = document.querySelector(".drawer-settings").style.width;
    console.log("drawerWidth:", width);
    return width !== "0px" && width !== "";
  },
  toggle: function () {
    let drawer = document.querySelector(".drawer-settings");
    var drawerWidth = drawer.style.width;
    console.log("drawer width:" + drawerWidth);
    let state = false;
    if (drawerWidth === "0px" || drawerWidth === "") {
      drawer.style.width = `${drawer.parentElement.clientWidth * 0.2}px`;
      state = true;
    } else {
      drawer.style.width = "0px";
      this.onDrawerClosed();
    }
    return state;
  },
};
