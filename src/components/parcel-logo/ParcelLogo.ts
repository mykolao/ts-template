import parcel from "../../resources/parcel-logo.png";
import "./parcel-logo.scss";

class ParcelLogo {
  element = document.createElement("img");
  size!: number[];
  aspect: number;
  animationFrame = 0;

  constructor() {
    this.element.src = parcel;
    this.aspect = 191 / 144;
    this.resize(191);
  }

  resize(size: number) {
    this.element.width = size * this.aspect;
    this.element.height = size;

    this.size = [size, size * this.aspect];
  }

  update(dt: number) {
    if (this.animationFrame < 30) {
      this.resize(this.size[0] + 1);
    } else if (this.animationFrame < 60) {
      this.resize(this.size[0] - 1);
    } else {
      this.animationFrame = 0;
    }

    this.animationFrame++;
  }

  getElement() {
    const container = document.createElement("div");
    container.className = "parcel-logo-container";
    container.style.height = `${191 + 32}px`;
    container.style.width = `${191 * this.aspect + 32}px`;
    container.appendChild(this.element);
    return container;
  }
}

export default ParcelLogo;
