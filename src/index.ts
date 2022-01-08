import "./styles/index.css";
import "@csstools/normalize.css";
import Hello from "./components/Hello";

const root = document.querySelector(".root");
root?.appendChild(Hello("Hello Typescript"));
