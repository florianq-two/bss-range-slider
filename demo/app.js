import { DoubleSlider } from "bootstrap-double-slider";
const slider = new DoubleSlider(".bs-multi-range", 50);

slider.el.addEventListener("change", event => console.log(event.detail.target));