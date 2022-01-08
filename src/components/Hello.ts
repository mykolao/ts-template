import "../styles/greeting.css";
const Hello = (msg: string) => {
  const element = document.createElement("h1");
  element.className = "greeting";
  element.textContent = msg;
  return element;
};

export default Hello;
