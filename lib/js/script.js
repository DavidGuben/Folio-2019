"use strict";

const babel = require("@babel/core");

babel.transform("code", optionsObject);

toggleNaviDisplay = () => {
  let x = document.getElementById('navi-list');

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};