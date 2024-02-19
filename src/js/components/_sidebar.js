let hmb = document.getElementById("hmbOpen"),
    bar = document.getElementById("sidebar"),
    body = document.getElementsByTagName("body")[0],
    closeVar = document.getElementById("closeSidebar");

hmb.onclick = function() {
    bar.classList.remove("sidebar-close");
    body.classList.add("noscroll");
};

closeVar.onclick = function() {
    bar.classList.add("sidebar-close");
    body.classList.remove("noscroll");
};