import ParcelLogo from "./components/parcel-logo/ParcelLogo";
import Title from "./components/Title/Title";

const title = Title("Hello Parcel ❤️");
const parcelLogo = new ParcelLogo();

const loop = (ts = 0) => {
  parcelLogo.update(ts);
  window.requestAnimationFrame(loop);
};

const container = document.querySelector(".container");

container.appendChild(title);
container.appendChild(parcelLogo.getElement());
loop();
