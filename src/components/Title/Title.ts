import "./title.scss";

const Title = (text: string) => {
  const element = document.createElement("div");
  element.className = "title";
  element.textContent = text;
  return element;
};

export default Title;
